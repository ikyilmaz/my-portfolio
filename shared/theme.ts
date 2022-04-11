import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bgColor: "#0f0f0f",
    primary: "crimson",
    secondary: "",
    tertiary: "",
  },
  text: {
    white: "#fff",
    black: "#0f0f0f",
  },

  fontSize: {
    desktop: {
      headingPrimary: "3.6rem",
      headingSecondary: "2rem",
      badge: "1.6rem",
      paragraph: "2rem",
      button: "1.6rem",
    },

    mobile: {
      headingPrimary: "2.4rem",
      headingSecondary: "1.6rem",
      badge: "1.2rem",
      paragraph: "1.6rem",
      button: "1.2rem",
    },
  },
  spacing: ["0.4rem", "0.8rem", "1.6rem", "3.2rem", "6.4rem"],
};
