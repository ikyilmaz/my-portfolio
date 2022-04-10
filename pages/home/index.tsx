import { gsap } from "gsap";
import type { NextPage } from "next";
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import { ContactButton } from "./components/ContactButton";
import { Features } from "./components/Features";
import { Heading } from "./components/Heading";

const Section = styled.div`
  height: 100vh;
  display: flex;
  .heading {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .vertical-line {
    background-color: ${(props) => props.theme.colors.primary};
    height: 50%;
    width: 2px;
    align-self: flex-end;
    margin-right: 30px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 1px;
      transform: translate(50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const HomePage: NextPage = () => {
  const tlRef = useRef(gsap.timeline());

  return (
    <DefaultLayout>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <Section>
              <div className="vertical-line"></div>
              <div className="heading">
                <Heading tl={tlRef.current} />
                <Features tl={tlRef.current} />
                <ContactButton tl={tlRef.current} />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
