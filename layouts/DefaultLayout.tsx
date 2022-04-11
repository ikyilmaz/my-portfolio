import gsap from "gsap";
import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { AnimatedCursor } from "../components/AnimatedCursor";
import { Reveal } from "../components/Reveal";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "nav-bar"
    "content";

  .nav {
    background-color: gainsboro;
    width: 100%;

    grid-area: "nav-bar";
  }

  .content {
    grid-area: "content";
  }
`;

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: NextPage<DefaultLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <AnimatedCursor />
      <Container>
        <Reveal />
        <nav></nav>
        <div className="content">{children}</div>
      </Container>
    </React.Fragment>
  );
};

export default DefaultLayout;
