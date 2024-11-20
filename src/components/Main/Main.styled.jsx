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

export const CardStateContainer = styled.div`
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

export const TitleStateWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;

  &::after {
    display: block;
    position: absolute;
    bottom: -1.5rem;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({ $lineColor }) => $lineColor};
  }
`;

export const TitleCardState = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
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
`;

export const CountProjectsInState = styled.h2`
  text-align: center;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  background-color: ${({ theme }) => theme.colors.secondaryDarkBackground};
  border-radius: 50%;
  margin-left: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const AddProjectButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
`;

export const AddProjectButtonImg = styled.img``;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.primaryLightBackground};
`;

export const ProjectHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectLevel = styled.div`
  line-height: 1.5rem;
  width: 2rem;
  height: 1.4rem;
  border-radius: 4px;
  color: ${({ $levelColor }) => $levelColor};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;

  background: ${({ $levelBg }) => $levelBg};
`;

export const ProjectMenu = styled.div``;

export const ProjectDescriptionContainer = styled.div``;

export const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`;

export const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`;

export const ProjectFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectFooterPeople = styled.div`
  width: 63px;
  height: 24px;
`;
export const ProjectFooterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const ProjectFooterComments = styled.div`
  color: rgb(120, 116, 134);
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: left;
  margin-right: 1rem;

  img {
    margin-right: 0.5rem;
  }
`;
export const ProjectFooterCountFiles = styled.div`
  color: rgb(120, 116, 134);
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: left;

  img {
    margin-right: 0.5rem;
  }
`;
