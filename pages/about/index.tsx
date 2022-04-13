import gsap from "gsap";
import { NextPage } from "next";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { TransitionContext } from "../../components/TransitionProvider";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useIsomorphicLayoutEffect } from "../../shared/utils";
import { Timeline } from "./components/Timeline";

const Wrapper = styled.div`
  min-width: 300px;
  max-width: 800px;
  margin: auto;

  display: grid;
  grid-template-columns: 800px;
  grid-template-rows: min-content 1fr;
  grid-row-gap: ${props => props.theme.spacing[7]};

  div {
    h2 {
      font-size: ${props => props.theme.fontSize.desktop.headingPrimary};
      width: max-content;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: ${props => props.theme.colors.primary};
      }

      span {
        color: ${props => props.theme.colors.primary};
      }
    }

    p {
      font-size: ${props => props.theme.fontSize.desktop.badge};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: min-content;
  }
`;

const AboutPage: NextPage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { timeline } = useContext(TransitionContext);

  useIsomorphicLayoutEffect(() => {
    gsap.from(wrapperRef.current, {
      opacity: 0,
      duration: 1,
    });
    timeline.add(
      gsap.to(wrapperRef.current, {
        opacity: 0,
        ease: "power4.out",
      }),
      0
    );
  }, []);

  return (
    <DefaultLayout>
      <Wrapper ref={wrapperRef}>
        <div>
          <h2>
            kısaca hakkımda<span>.</span>
          </h2>
          <br />
          <p>
            Ben İsmail. 21 yaşındayım. 3 yıldır yazılım ile ilgilenmekteyim. Bu süreçte ve şu an kendimi sürekli olarak
            geliştirip yeni şeyler öğrenmeyi hedefledim. Akdeniz Üniversitesi Bilgisayar Programcılığı mezunuyum.
          </p>
        </div>
        <Timeline />
      </Wrapper>
    </DefaultLayout>
  );
};

export default AboutPage;
