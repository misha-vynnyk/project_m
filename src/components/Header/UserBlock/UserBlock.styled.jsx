import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-right: 1.5rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    margin-right: 0.5rem;
  }
`;

export const UserBlockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  margin-right: 1rem;
  min-width: 6rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    gap: 0.5rem;
    margin-right: 0.5rem;
    min-width: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    gap: 0.3rem;
    margin-right: 0.5rem;
    min-width: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 1rem;
    height: 1rem;
  }
`;

export const UserMenuButtonIcon = styled.img`
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 13rem;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    min-width: 12rem;
  }

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    min-width: 10rem;
  }
`;

export const UserInfoName = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    font-size: 0.8rem;
  }
`;

export const UserInfoCountry = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.mobileL}) {
    font-size: 0.8rem;
  }
`;

export const UserInfoAvatar = styled.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const UserMenuOpener = styled.button`
  cursor: pointer;
  background-color: transparent;
`;

export const UserMenuOpenerIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
