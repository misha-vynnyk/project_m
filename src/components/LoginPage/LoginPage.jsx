import { useContext, useState } from "react";
import {
  LoginForm,
  LoginStyled,
  FormTitle,
  InputGroup,
  Input,
  Button,
  SwitchText,
  SwitchLink,
} from "./LoginPage.styled";
import { LoginContext } from "../../context/LoginContext";
import CloseButton from "../Button/CloseButton/CloseButton";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

const LoginPage = () => {
  const { setShowLoginForm } = useContext(LoginContext);
  const { setIsLoggedIn, mode, setMode } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleToggleForm = () => {
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // createUserWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => console.log(error));

    setIsLoggedIn((prev) => !prev);
    setShowLoginForm(false);
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
