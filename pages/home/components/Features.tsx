import gsap from "gsap";
import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { TransitionContext } from "../../../components/TransitionProvider";
import { useIsomorphicLayoutEffect } from "../../../shared/utils";

const Wrapper = styled.div`
  grid-area: features;

  h6 {
    margin: 0;
    .feature {
      display: inline-block;
      padding-left: 25px;
      font-size: ${props => props.theme.fontSize.desktop.badge};
      font-weight: 100;
    }

    .tag {
      font-weight: 500;
      font-size: ${props => props.theme.fontSize.desktop.headingSecondary};
    }
  }

  @media (max-width: 768px) {
    h6 {
      .feature {
        font-size: ${props => props.theme.fontSize.mobile.badge};
      }

      .tag {
        font-size: ${props => props.theme.fontSize.mobile.badge};
      }
    }
  }
`;

type FeaturesProps = {
  delay: number;
};

export const Features: React.FC<FeaturesProps> = ({ delay }) => {
  const featuresRef = useRef<HTMLHeadingElement>(null);

  const { timeline } = useContext(TransitionContext);

  useIsomorphicLayoutEffect(() => {
    const featuresSelector = gsap.utils.selector(featuresRef.current);

    gsap.from(featuresSelector(".tag"), {
      x: -100,
      opacity: 0,
      ease: "power4.out",
      delay,
    });

    gsap.from(featuresSelector(".feature"), {
      x: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
        from: "edges",
      },
      delay,
    });

    timeline.add(
      gsap.to(featuresRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
      }),
      0
    );
  }, []);

  return (
    <Wrapper>
      <h6 ref={featuresRef}>
        <span className="tag">{`<WebDeveloper>`}</span>
        <br />
        <span className="feature">SCSS-SASS</span>
        <br />
        <span className="feature">Javascript-Typescript</span>
        <br />
        <span className="feature">React-Angular-Vue</span>
        <br />
        <span className="feature">NodeJS-Golang</span>
        <br />
        <span className="feature">ExpressJS-NestJS</span>
        <br />
        <span className="feature">GraphQL</span>
        <br />
        <span className="feature">MySQL-MongoDB-Redis</span>
        <br />
        <span className="tag">{`</WebDeveloper>`}</span>
      </h6>
    </Wrapper>
  );
};
