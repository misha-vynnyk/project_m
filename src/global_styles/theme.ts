export const theme = {
  mobile: "425px",
  mobileL: "600px",
  tablet: "768px",
  desktop: "1024px",

  headerSize: {
    mobileHeight: "3rem",
    tabletHeight: "4rem",
    desktopHeight: "5.5rem",
  },

  fonts: {
    primaryFont: "'Inter', sans-serif",
  },

  colors: {
    primaryLightBackground: "#fff",
    secondaryLightBackground: "#f5f5f5",
    primaryDarkBackground: "#0D062D",
    secondaryDarkBackground: "#E0E0E0",
    hoverBackground: "rgba(80, 48, 229, 0.08)",
    activeColorBackground: "#ffd5d5",

    borderLineColor: "1px solid rgb(219, 219, 219)",

    darkBlue: " #5030E5",
    lightBlue: "rgb(34, 1, 179)",

    darkText: "#0D062D",
    lightText: "#625F6D",
  },
} as const;

export interface tasksVariableType {
  levelBackgroundColorOrange: string;
  levelBackgroundColorGreen: string;
  levelBackgroundColorBlue: string;
  levelBackgroundColorRed: string;
  levelColorOrange: string;
  levelColorGreen: string;
  levelColorBlue: string;
  levelColorRed: string;
}

export const tasksVariable: tasksVariableType = {
  levelBackgroundColorOrange: "rgba(223, 168, 116, 0.2)",
  levelBackgroundColorGreen: "rgba(139, 196, 138, 0.2)",
  levelBackgroundColorBlue: "rgba(80, 48, 229, 0.2)",
  levelBackgroundColorRed: "rgba(234, 88, 88, 0.2)",

  levelColorOrange: "#D58D49",
  levelColorGreen: "#8BC48A",
  levelColorBlue: "#5030E5",
  levelColorRed: "#d54747",
};
