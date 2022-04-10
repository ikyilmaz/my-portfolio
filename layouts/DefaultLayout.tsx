import gsap from "gsap";
import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { Reveal } from "../components/Reveal";

const Container = styled.div`
  .nav {
    height: 100vh;
  }
`;

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: NextPage<DefaultLayoutProps> = ({ children }) => {
  return (
    <Container className="container">
      <Reveal />
      {children}
    </Container>
  );
};

export default DefaultLayout;
