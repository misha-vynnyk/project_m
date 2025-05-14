import styled from "styled-components";
import { theme } from "../../global_styles/theme";

export const LoginStyled = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`;

export const LoginForm = styled.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${theme.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${theme.mobile}) {
    padding: 1rem;
  }
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.lightBlue};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const ButtonLogout = styled(Button)``;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const SwitchLink = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const AlarmMessage = styled.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`;

export const FormButtonCloseContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
