import { gsap } from "gsap";
import type { NextPage } from "next";
import Image from "next/image";
import React, { useContext } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { TransitionContext } from "../../components/TransitionProvider";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useIsomorphicLayoutEffect } from "../../shared/utils";
import { ContactButton } from "./components/ContactButton";
import { Features } from "./components/Features";
import { Heading } from "./components/Heading";
import { MeImage } from "./components/MeImage";

const Section = styled.div`
  display: flex;
  height: 100%;
  width: 90vw;
  align-items: center;
  padding: 0 200px;
  /* background-color: #555; */

  .heading {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content;
    gap: ${props => props.theme.spacing[5]} 0px;
    grid-template-areas:
      "heading meStart"
      "features meCenter"
      "contact meEnd";
  }

  .vertical-line {
    background-color: ${props => props.theme.colors.primary};
    height: 50%;
    width: 2px;
    align-self: flex-end;
    margin-right: 30px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 1px;
      transform: translate(50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    padding: 0px 40px;
  }
`;

const HomePage: NextPage = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { timeline } = useContext(TransitionContext);
  // kaldır bunu ve delayi
  const tlRef = useRef(gsap.timeline());

  useIsomorphicLayoutEffect(() => {
    gsap.from(lineRef.current, {
      opacity: 0,
    });
    timeline.add(
      gsap.to(lineRef.current, {
        opacity: 0,
        ease: "power4.out",
      }),
      0
    );
  }, []);

  return (
    <DefaultLayout>
      <Section>
        <div ref={lineRef} className="vertical-line"></div>
        <div className="heading">
          <Heading delay={1} />
          <Features delay={1} />
          <ContactButton delay={1} />
          <MeImage delay={1} />
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default HomePage;
