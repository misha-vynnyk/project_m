import styled from "styled-components";

export const LoginStyled = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  transition: 3000ms;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondaryLightBackground};
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
  color: #ff0000b5;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;
`;
