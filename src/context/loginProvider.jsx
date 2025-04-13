import PropTypes from "prop-types";
import { useState } from "react";
import { loginContext } from "./loginContext";

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <loginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLogin, setIsLogin, handleSubmit }}
    >
      {children}
    </loginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
