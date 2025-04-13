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
import { loginContext } from "../../context/loginContext";

const LoginPage = () => {
  const { isLogin, setIsLogin, handleSubmit } = useContext(loginContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsLogin(prev => !prev)
  // };

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
        <FormTitle>{isLogin ? "Login" : "Register"}</FormTitle>

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

        {!isLogin && (
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

        <Button type="submit">{isLogin ? "Login" : "Register"}</Button>

        <SwitchText>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <SwitchLink onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </SwitchLink>
        </SwitchText>
      </LoginForm>
    </LoginStyled>
  );
};

export default LoginPage;
