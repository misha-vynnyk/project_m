import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primaryLightBackground};
  width: 100%;
  padding: 0 2rem;
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

export const HeaderMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    margin-left: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    margin-left: 0.5rem;
    justify-content: end;
  }
`;