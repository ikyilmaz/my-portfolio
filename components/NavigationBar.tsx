import Link from "next/link";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { mouseEnter, mouseLeave } from "../redux/cursorSlice";
import { useAppDispatch } from "../redux/hooks";
import { useIsomorphicLayoutEffect } from "../shared/utils";
import { TransitionContext } from "./TransitionProvider";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  nav {
    display: flex;
    padding: 0px ${props => props.theme.spacing[6]};
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .brand {
      span {
        font-size: ${props => props.theme.fontSize.desktop.paragraph};
        position: relative;
        &::before {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${props => props.theme.colors.primary};
          transition: all 0.4s;
        }
      }
    }

    .menu {
      height: 100%;
      &-list {
        list-style: none;
        height: 100%;
        padding: 0;
        margin: 0;

        display: flex;
        align-items: center;
        &-item {
          padding: 0px ${props => props.theme.spacing[5]};

          a {
            display: block;
            height: 100%;

            position: relative;
            text-decoration: none;
            font-size: ${props => props.theme.fontSize.desktop.paragraph};
            span {
              color: ${props => props.theme.colors.primary};
            }

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
              background-color: ${props => props.theme.colors.primary};
              transform: scaleX(0);
              transform-origin: left;
              transition: all 0.4s;
            }
          }

          .active {
            &::before {
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      .menu {
        display: none;
      }
    }
  }
`;

export const NavigationBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLElement>(null);
  const { timeline } = useContext(TransitionContext);

  const router = useRouter();

  const links = [
    { name: "anasayfa", url: "/", active: true },
    { name: "hakkımda", url: "/about", active: false },
    { name: "iletişim", url: "/contact", active: false },
    { name: "github", url: "#", active: false },
  ];

  useIsomorphicLayoutEffect(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      duration: 1,
    });
    timeline.add(
      gsap.to(navRef.current, {
        opacity: 0,
        ease: "power4.out",
      }),
      0
    );
  }, []);

  return (
    <Wrapper>
      <nav ref={navRef}>
        <div className="brand">
          <span>ismail kurban yilmaz</span>
        </div>
        <div className="menu">
          <ul className="menu-list">
            {links.map(link => {
              return (
                <li key={link.name} className="menu-list-item">
                  <Link href={link.url}>
                    <a
                      onMouseEnter={() => dispatch(mouseEnter())}
                      onMouseLeave={() => dispatch(mouseLeave())}
                      className={router.asPath == link.url ? "active" : ""}
                    >
                      <span>.</span>
                      {link.name}
                      <span>()</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};
