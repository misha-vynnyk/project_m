import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  height: 5.5rem;
  border-bottom: ${({ theme }) => theme.colors.borderLineColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
`;