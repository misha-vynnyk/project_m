import PropTypes from "prop-types";
import { useState } from "react";
import { loginContext } from "./loginContext";

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <loginContext.Provider  value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </loginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
