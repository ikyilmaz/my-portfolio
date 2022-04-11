import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .heading-wrapper {
    width: 100%;
    height: 7rem;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: left;
    align-items: center;

    .heading {
      display: block;
      font-size: ${(props) => props.theme.fontSize.desktop.headingPrimary};
      font-weight: 500;

      &:hover::before {
        transform: scaleX(1);
      }

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${(props) => props.theme.colors.primary};
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.4s;
      }

      b {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    .heading-wrapper {
      .heading {
        font-size: ${(props) => props.theme.fontSize.mobile.headingPrimary};
      }
    }
  }
`;

type HeadingProps = {
  tl: gsap.core.Timeline;
};

export const Heading: React.FC<HeadingProps> = ({ tl }) => {
  const headingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const headingSelector = gsap.utils.selector(headingRef.current);
    tl.from(
      headingSelector("h2"),
      {
        y: 100,
        autoAlpha: 1,
        stagger: 0.3,
        ease: "power4.out",
        duration: 1,
        skewY: 10,
      },
      0.4
    );
  });

  return (
    <Wrapper ref={headingRef}>
      <div className="heading-wrapper">
        <h2 className="heading">Selam!</h2>
      </div>
      <div className="heading-wrapper">
        <h2 className="heading">
          Ben <b>İsmail</b>
        </h2>
      </div>
      <div className="heading-wrapper">
        <h2 className="heading">
          Yazılımsal <b>şeyler</b> yaparım...
        </h2>
      </div>
    </Wrapper>
  );
};
