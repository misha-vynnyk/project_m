import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global_styles/Global";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useSidebar } from "./hooks/useSidebar";
import { theme } from "./global_styles/theme";
import { useRef } from "react";
import OutsideClick from "./hooks/outsideClick";

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);

  const isOutsideClick = OutsideClick([headerRef, sidebarRef]);

  if (isOutsideClick && isSidebarOpen) {
    toggleSidebar();
  }

  console.log("isOutsideClick", isOutsideClick);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $isSidebarOpen={isSidebarOpen} />
      <Header
        ref={headerRef}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Main isSidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} />
    </ThemeProvider>
  );
};

export default App;
