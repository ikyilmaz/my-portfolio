import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      white: string;
      black: string;
    };

    fontSize: {
      desktop: {
        headingPrimary: string;
        headingSecondary: string;
        badge: string;
        paragraph: string;
        button: string;
      };

      mobile: {
        headingPrimary: string;
        headingSecondary: string;
        badge: string;
        paragraph: string;
        button: string;
      };
    };

    spacing: string[];
  }
}
