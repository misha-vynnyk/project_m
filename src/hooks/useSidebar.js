import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return [isSidebarOpen, toggleSidebar];
};
