import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/global_styles/Global";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useSidebar } from "./hooks/useSidebar";

const theme = {
  mobile: "768px",
  tablet: "1280px",
  desktop: "1440px",

  fonts: {
    primaryFont: "'Inter', sans-serif",
  },

  colors: {
    primaryLightBackground: "#FFFFFFF",
    secondaryLightBackground: "#FFFFFF",
    primaryDarkBackground: "#0D062D",
    secondaryDarkBackground: "#141416",

    borderLineColor: "1px solid rgb(219, 219, 219)",

    darkText: "#0D062D",
    lightText: "#7A7A7A",
  },
};

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header 
        onToggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
      />
      <Main isSidebarOpen={isSidebarOpen} />
    </ThemeProvider>
  );
};


export default App;
