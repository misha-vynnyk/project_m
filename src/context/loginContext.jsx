import { createContext } from "react";

export const loginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isLogin: true,
  setIsLogin: () => { },
  handleSubmit: () => {},
});
