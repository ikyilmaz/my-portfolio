import { gsap } from "gsap";
import type { NextPage } from "next";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import { ContactButton } from "./components/ContactButton";
import { Features } from "./components/Features";
import { Heading } from "./components/Heading";

const Section = styled.div`
  display: flex;
  height: 100%;
  width: 90vw;
  margin: auto;
  align-items: center;
  /* background-color: #555; */

  .heading {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content;
    gap: ${props => props.theme.spacing[5]} 0px;
    grid-template-areas:
      "heading"
      "features"
      "contact";
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
`;

const HomePage: NextPage = () => {
  const tlRef = useRef(gsap.timeline());

  return (
    <DefaultLayout>
      <Section>
        <div className="vertical-line"></div>
        <div className="heading">
          <Heading tl={tlRef.current} />
          <Features tl={tlRef.current} />
          <ContactButton tl={tlRef.current} />
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default HomePage;
