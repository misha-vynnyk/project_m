import styled from "styled-components";

export const MainStyled = styled.main`
  margin-top: ${({ theme }) => theme.headerSize.desktopHeight};
  height: 100%;
  overflow: hidden;

  section {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.primaryBlackBackground};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: ${({ theme }) => theme.headerSize.mobileHeight};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: ${({ theme }) => theme.headerSize.tabletHeight};
  }
`;

export const MainContent = styled.div`
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "16rem" : "0")};
  transition: all 0.3s ease-in-out;
  height: 100%;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "0" : "0")};
    transition: filter 0.3s ease-in-out;
    filter: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "blur(5px)" : "none")};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CardState = styled.div`
  padding: 1.5rem;
  width: 23rem;
  height: 100vh;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};
`;

export const ProjectsCard = styled.div`
`;

export const TitleCardState = styled.h2`
  position: relative;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: left;

  &::before {
    display: inline-block;
    margin-right: 0.5rem;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ $lineColor }) => $lineColor};
  }

  &::after {
    display: block;
    position: absolute;
    margin: 1.4rem 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ $lineColor }) => $lineColor};
  }
`;

export const AddProjectButton = styled.button`
margin-left: 14rem;
  width: 1.5rem;
  height: 1.5rem;
`;

 export const AddProjectButtonImg = styled.img`
 `
