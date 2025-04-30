import PropTypes from "prop-types";
import { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [mode, setMode] = useState("login");
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        showLoginForm,
        setShowLoginForm,
        mode,
        setMode,
        loggedUser,
        setLoggedUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
