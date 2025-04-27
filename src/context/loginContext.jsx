import { createContext } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  showLoginForm: false,
  setShowLoginForm: () => {},
  mode: 'login',
  setMode: () => {},
});
