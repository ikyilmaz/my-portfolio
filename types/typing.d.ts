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
  }
}
