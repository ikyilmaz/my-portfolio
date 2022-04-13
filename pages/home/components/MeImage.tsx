import gsap from "gsap";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { TransitionContext } from "../../../components/TransitionProvider";
import { useIsomorphicLayoutEffect } from "../../../shared/utils";

const Wrapper = styled.div`
  grid-area: meStart-start / meStart-start / meEnd-end;
  justify-self: flex-end;

  position: relative;

  perspective: 100rem;

  img {
    max-width: 400px;
    /* 
    width: 100%;
    height: 100%; */

    border-radius: 12px;
  }

  .back {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    transition: all 0.7s;
    transform: translateY(100px);
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${props => props.theme.fontSize.desktop.headingPrimary};
  }

  &:hover .back {
    transform: translateY(0px);
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

type MeImageProps = {
  delay: number;
};

export const MeImage: React.FC<MeImageProps> = ({ delay }) => {
  const { timeline } = useContext(TransitionContext);
  const meRef = useRef<HTMLImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.from(meRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay,
    });

    timeline.add(
      gsap.to(meRef.current, {
        x: 100,
        opacity: 0,
        ease: "power4.out",
      }),
      0
    );
  }, []);

  return (
    <Wrapper>
      <img ref={meRef} src="/ben.jpg" alt="me" />
      <div className="back">
        <span>ben</span>
      </div>
    </Wrapper>
  );
};
