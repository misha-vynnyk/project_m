import styled from "styled-components";

export const Container = styled.div``;

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.headerSize.desktopHeight};

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
  padding: 2rem;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    padding: 0.5rem;
    margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "0" : "0")};
    transition: filter 0.3s ease-in-out;
    filter: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "blur(5px)" : "none")};
  }
`;

export const CardStateContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`;

export const CardState = styled.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
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

export const CountProjectsInState = styled.p`
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

export const TaskList = styled.div`
  height: 100%;
`;

export const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
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
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({ $levelColor }) => $levelColor};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({ $levelBg }) => $levelBg};
`;

export const ProjectMenu = styled.button`
  background-color: transparent;
`;

export const IconProjectMenu = styled.img``;

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

export const ProjectImage = styled.img`
  border-radius: 8px;
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
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`;
export const ProjectFooterCountFiles = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`;

export const DropInfo = styled.div`
  height: 100%;
`;
