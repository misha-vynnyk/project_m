import styled from "styled-components";

export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

export const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333;
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
  background: #5030e5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5239c3;
  }
`;

export const ButtonLogout = styled(Button)`
  /* width: 10rem; */
`

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #666;
`;

export const SwitchLink = styled.span`
  color: #4a90e2;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
