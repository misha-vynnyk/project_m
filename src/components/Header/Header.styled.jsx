import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primaryLightBackground};
  width: 100%;
  padding: 2rem;
  height: ${({ theme }) => theme.headerSize.desktopHeight};
  border-bottom: ${({ theme }) => theme.colors.borderLineColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5rem;
    height: ${({ theme }) => theme.headerSize.mobileHeight};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 1rem;
    height: ${({ theme }) => theme.headerSize.tabletHeight};
  }
`;