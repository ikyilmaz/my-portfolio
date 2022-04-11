import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .contact-wrapper {
    position: relative;
    overflow: hidden;

    .button {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.text.white};
      padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
      border: 1px solid ${props => props.theme.colors.primary};
      text-transform: uppercase;
      font-size: ${props => props.theme.fontSize.desktop.button};
      font-weight: bold;
      letter-spacing: 5px;
      position: relative;

      &:hover::before {
        transform: scaleX(1);
      }

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.colors.primary};
        transform: scaleX(0);
        transform-origin: left;
        transition: all 0.4s;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-wrapper {
      .button {
        font-size: ${props => props.theme.fontSize.mobile.button};
      }
    }
  }
`;

type ContactButtonProps = {
  tl: gsap.core.Timeline;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ tl }) => {
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    tl.from(
      contactBtnRef.current,
      {
        x: -100,
        opacity: 0,
        ease: "power4.out",
      },
      1
    );
  });

  return (
    <Wrapper>
      <div className="contact-wrapper">
        <a className="button" ref={contactBtnRef} href="#">
          İLETİŞİM!
        </a>
      </div>
    </Wrapper>
  );
};
