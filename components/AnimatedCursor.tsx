import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";

const Wrapper = styled.div`
  /* * {
    cursor: none;
  } */

  .cursor-dot,
  .cursor-dot-outline {
    z-index: 99999;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 1;
    will-change: width, height, transform, border;
    mix-blend-mode: difference;
  }

  .cursor-dot {
    width: 8px;
    height: 8px;
    background-color: white;
    /* transition: transform 0.1s ease-in-out; */
  }

  .cursor-dot-outline {
    width: 40px;
    height: 40px;
    background-color: crimson;
    /* transition: transform 0.1s ease-in-out; */
  }
`;

export const AnimatedCursor: React.FC = () => {
  const dot = useRef<HTMLDivElement>(null);
  const dotOutline = useRef<HTMLDivElement>(null);

  const cursorState = useAppSelector(state => state.cursor.state);

  function mouseMoveEvent(e: MouseEvent) {
    gsap.to(dot.current, { top: e.pageY, left: e.pageX, duration: 0.2 });

    gsap.to(dotOutline.current, { top: e.pageY, left: e.pageX, duration: 0.4, ease: "sine.out" });
  }

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  });

  useEffect(() => {
    if (cursorState === "mouseenter") {
      gsap.to(dotOutline.current, { width: 100, height: 100, duration: 0.4, ease: "sine.out" });
    }

    if (cursorState === "mouseleave") {
      gsap.to(dotOutline.current, { width: 40, height: 40 });
    }
  }, [cursorState]);

  return (
    <Wrapper>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </Wrapper>
  );
};
