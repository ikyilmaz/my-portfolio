import gsap from "gsap";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TransitionContext } from "../../../components/TransitionProvider";
import { mouseEnter, mouseLeave } from "../../../redux/cursorSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useIsomorphicLayoutEffect } from "../../../shared/utils";

const Wrapper = styled.div`
  grid-area: contact;

  .contact-wrapper {
    position: relative;
    overflow: hidden;

    .button {
      display: block;
      text-decoration: none;
      width: min-content;
      color: ${props => props.theme.text.white};
      padding: ${props => props.theme.spacing[3]} ${props => props.theme.spacing[4]};
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
        padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
      }
    }
  }
`;

type ContactButtonProps = {
  delay: number;
};

export const ContactButton: React.FC<ContactButtonProps> = ({ delay }) => {
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  const dispatch = useAppDispatch();

  const { timeline } = useContext(TransitionContext);

  useIsomorphicLayoutEffect(() => {
    gsap.from(contactBtnRef.current, {
      x: -100,
      opacity: 0,
      ease: "power4.out",
      delay,
    });

    timeline.add(
      gsap.to(contactBtnRef.current, {
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
      <div className="contact-wrapper">
        <Link href="/home">
          <a
            onMouseEnter={() => dispatch(mouseEnter())}
            onMouseLeave={() => dispatch(mouseLeave())}
            className="button"
            ref={contactBtnRef}
          >
            İLETİŞİM!
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};
