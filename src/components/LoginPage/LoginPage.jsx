import { useContext, useEffect, useState } from "react";
import {
  LoginForm,
  LoginStyled,
  FormTitle,
  InputGroup,
  Input,
  Button,
  SwitchText,
  SwitchLink,
  AlarmMessage,
} from "./LoginPage.styled";
import { LoginContext } from "../../context/LoginContext";
import CloseButton from "../Button/CloseButton/CloseButton";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const LoginPage = () => {
  const { setIsLoggedIn, mode, setMode, setShowLoginForm, setLoggedUser } =
    useContext(LoginContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
        setIsLoggedIn(true);
      } else {
        setLoggedUser(null);
        setIsLoggedIn(false);
      }
      console.log("User:", user);
      
    });

    return () => listen();
  }, []);

  const handleToggleForm = () => {
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "register" && formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    switch (mode) {
      case "login":
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then(() => {
            setIsLoggedIn(true);
            setShowLoginForm(false);
          })
          .catch((error) => {
            console.log(error);
            setIsLoggedIn(false);
            setErrorMessage("User not defined");
            return;
          })
          .finally(() => {
            setTimeout(() => setErrorMessage(""), 5000);
          });
        break;
      case "register":
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then(() => {
            setIsLoggedIn(true);
            setShowLoginForm(false);
          })
          .catch((error) => setErrorMessage(error));
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <LoginStyled>
      <LoginForm onSubmit={handleSubmit}>
        <CloseButton onClick={handleCloseLoginForm} />
        <FormTitle>{mode === "login" ? "Login" : "Register"}</FormTitle>

        <AlarmMessage>
          To log in, use the email: <br /> projectm@example.com <br /> and{" "}
          <br />
          password: 123456
        </AlarmMessage>
        {errorMessage && <AlarmMessage>{errorMessage}</AlarmMessage>}

        <InputGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </InputGroup>

        {mode === "register" && (
          <InputGroup>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </InputGroup>
        )}

        {/* <p style={{ color: "red" }}>{error}</p> */}

        <Button type="submit">
          {mode === "login" ? "Sign in" : "Sign up"}
        </Button>

        <SwitchText>
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <SwitchLink onClick={handleToggleForm}>
            {mode === "login" ? "Sign up" : "Sign in"}
          </SwitchLink>
        </SwitchText>
      </LoginForm>
    </LoginStyled>
  );
};

export default LoginPage;
