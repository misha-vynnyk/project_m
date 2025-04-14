// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mobile: string;
    mobileL: string;
    tablet: string;
    desktop: string;

    headerSize: {
      mobileHeight: string;
      tabletHeight: string;
      desktopHeight: string;
    };

    fonts: {
      primaryFont: string;
    };

    colors: {
      primaryLightBackground: string;
      secondaryLightBackground: string;
      primaryDarkBackground: string;
      secondaryDarkBackground: string;
      hoverBackground: string;

      borderLineColor: string;

      darkBlue: string;
      lightBlue: string;

      darkText: string;
      lightText: string;
    };
  }
}
