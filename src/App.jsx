import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global_styles/Global";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useSidebar } from "./hooks/useSidebar";
import { theme } from "./global_styles/theme";

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
