import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const FirstLayer = styled.div`
  background-color: crimson;
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
  background-color: black;
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

  useEffect(() => {
    gsap.to([secondLayerRef.current, firstLayerRef.current], {
      transform: "scaleY(0)",
      duration: 1,
      stagger: 0.3,
      ease: "Expo.easeInOut",
    });

    console.log("annen");
  });

  return (
    <React.Fragment>
      <FirstLayer ref={firstLayerRef} />
      <SecondLayer ref={secondLayerRef} />
    </React.Fragment>
  );
};
