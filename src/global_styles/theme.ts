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

    borderLineColor: "1px solid rgb(219, 219, 219)",

    darkBlue: " #5030E5",
    lightBlue: "rgb(34, 1, 179)",

    darkText: "#0D062D",
    lightText: "#625F6D",
  },
} as const;
