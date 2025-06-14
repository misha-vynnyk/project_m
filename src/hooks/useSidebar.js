import { useState, useEffect } from "react";
import { useIsResponsive } from "./useResponsive";

export const useSidebar = (initialState = false) => {
  // Check if the screen is mobile for controlling the Sidebar state
  const isMobile = useIsResponsive(700); // Track screen size 

  const [isSidebarOpen, setSidebarOpen] = useState(
    isMobile ? false : initialState
  );

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    // Automatically close and open the Sidebar when transitioning to mobile view
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return [isSidebarOpen, toggleSidebar, isMobile];
};