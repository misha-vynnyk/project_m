import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primaryLightBackground};
  width: 100%;
  padding: 2rem;
  height: 5.5rem;
  border-bottom: ${({ theme }) => theme.colors.borderLineColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;