import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h6 {
    margin-top: 30px;

    .feature {
      display: inline-block;
      padding-left: 25px;
      font-size: ${(props) => props.theme.fontSize.desktop.badge};
      font-weight: 100;
    }

    .tag {
      font-weight: 500;
      font-size: ${(props) => props.theme.fontSize.desktop.headingSecondary};
    }
  }

  @media (max-width: 768px) {
    h6 {
      .feature {
        font-size: ${(props) => props.theme.fontSize.mobile.badge};
      }

      .tag {
        font-size: ${(props) => props.theme.fontSize.mobile.badge};
      }
    }
  }
`;

type FeaturesProps = {
  tl: gsap.core.Timeline;
};

export const Features: React.FC<FeaturesProps> = ({ tl }) => {
  const featuresRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const featuresSelector = gsap.utils.selector(featuresRef.current);

    tl.from(
      featuresSelector(".tag"),
      {
        x: -100,
        opacity: 0,
        ease: "power4.out",
      },
      1
    );

    tl.from(
      featuresSelector(".feature"),
      {
        x: 100,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
          from: "edges",
        },
      },
      1
    );
  });

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
