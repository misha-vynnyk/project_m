import { createContext } from "react";

export const loginContext = createContext({
  isLoggedIn: true,
  setIsLoggedIn: () => {},
});
