import React from "react";
import styled from "styled-components";
import { mouseEnter, mouseLeave } from "../redux/cursorSlice";
import { useAppDispatch } from "../redux/hooks";

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
`;

export const NavigationBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const links = [
    { name: "anasayfa", url: "#", active: true },
    { name: "hakkımda", url: "#", active: false },
    { name: "iletişim", url: "#", active: false },
    { name: "github", url: "#", active: false },
  ];

  return (
    <Wrapper>
      <nav>
        <div className="brand">
          <span>ismail kurban yilmaz</span>
        </div>
        <div className="menu">
          <ul className="menu-list">
            {links.map(link => {
              return (
                <li key={link.name} className="menu-list-item">
                  <a
                    onMouseEnter={() => dispatch(mouseEnter())}
                    onMouseLeave={() => dispatch(mouseLeave())}
                    className={link.active ? "active" : ""}
                    href={link.url}
                  >
                    <span>.</span>
                    {link.name}
                    <span>()</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};
