import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global_styles/Global";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useSidebar } from "./hooks/useSidebar";
import { theme } from "./global_styles/theme";
import { useContext, useRef } from "react";
import OutsideClick from "./hooks/outsideClick";
import { loginContext } from "./context/loginContext";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  const [isSidebarOpen, toggleSidebar, isMobile] = useSidebar();
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);

  const isOutsideClick = OutsideClick([headerRef, sidebarRef]);

  if (isOutsideClick && isSidebarOpen && isMobile) {
    toggleSidebar();
  }

  const { isLoggedIn } = useContext(loginContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $isSidebarOpen={isSidebarOpen} />
      <Header
        ref={headerRef}
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      {isLoggedIn ? (
        <Main isSidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} />
      ) : (
        <LoginPage />
      )}
    </ThemeProvider>
  );
};

export default App;
