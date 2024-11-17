import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-right: 1.5rem;
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
  gap: 1.5rem;
  margin-right: 2.5rem;
  width: 100%;
  max-width: 8rem;
  min-width: 6rem;
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
`;

export const UserMenuButtonIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoName = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  text-align: right;
`;

export const UserInfoCountry = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 17px;
  text-align: right;
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
