import { gsap } from "gsap";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useIsomorphicLayoutEffect } from "../shared/utils";
import { TransitionContext } from "./TransitionProvider";

const FirstLayer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: scaleY(1);
  transform-origin: bottom;
`;

const SecondLayer = styled.div`
  background-color: ${props => props.theme.colors.bgColor};
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: scaleY(1);
  transform-origin: bottom;
`;

export const Reveal = () => {
  const firstLayerRef = useRef<HTMLDivElement>(null);
  const secondLayerRef = useRef<HTMLDivElement>(null);

  const { timeline } = useContext(TransitionContext);

  useIsomorphicLayoutEffect(() => {
    gsap.to([secondLayerRef.current, firstLayerRef.current], {
      transform: "scaleY(0)",
      duration: 1,
      stagger: 0.3,
      ease: "Expo.easeInOut",
    });

    // timeline.add(
    //   gsap.to([firstLayerRef.current, secondLayerRef.current], {
    //     transform: "scaleY(1)",
    //     duration: 1,
    //     stagger: 0.3,
    //     ease: "Expo.easeInOut",
    //   })
    // );
  }, []);

  return (
    <React.Fragment>
      <FirstLayer ref={firstLayerRef} />
      <SecondLayer ref={secondLayerRef} />
    </React.Fragment>
  );
};
