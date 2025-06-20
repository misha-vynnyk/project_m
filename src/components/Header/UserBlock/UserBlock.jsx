import { useContext, useState } from "react";
import {
  UserBlockContainer,
  UserInfo,
  UserInfoAvatar,
  UserInfoCountry,
  UserInfoName,
  UserMenu,
  UserMenuButton,
  UserMenuButtonIcon,
  UserMenuOpener,
  UserMenuPupUp,
  Wrapper,
  WrapperUserInfo,
} from "./UserBlock.styled";
import { ButtonLogout } from "../../LoginPage/LoginPage.styled";
import { LoginContext } from "../../../context/LoginContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const userMenu = [
  {
    id: 1,
    name: "Calendar",
    icon: "icon/calendar_icon.svg",
    ariaLabel: "Open calendar",
  },
  {
    id: 2,
    name: "Messages question",
    icon: "icon/message-question_icon.svg",
    ariaLabel: "Check messages or questions",
  },
  {
    id: 3,
    name: "Notifications",
    icon: "icon/notification_icon.svg",
    ariaLabel: "View notifications",
  },
];

const userInfo = [
  {
    id: 1,
    userName: "Lee Song",
    country: "United States",
    avatar: "image/avatar-1.jpeg",
  },
];

export const UserBlock = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { setIsLoggedIn, loggedUser, setShowLoginForm } =
    useContext(LoginContext);

  const handleUserMenuOpen = () => {
    setIsUserMenuOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setShowLoginForm(false);
        console.log("LogOut:");
      })
      .catch((error) => console.log(error));
  };

  console.log("User:", loggedUser);

  return (
    <UserBlockContainer role="region" aria-label="User menu block">
      <UserMenu aria-label="User menu navigation">
        {userMenu.map(({ id, icon, ariaLabel }) => (
          <UserMenuButton aria-label={ariaLabel} key={id} aria-haspopup="true">
            <UserMenuButtonIcon src={icon} alt="" />
          </UserMenuButton>
        ))}
      </UserMenu>

      <UserInfo role="group" aria-label="User information">
        {userInfo.map(({ id, userName, country, avatar }) => (
          <Wrapper key={id} role="group" aria-label="User information">
            <WrapperUserInfo
              aria-labelledby={`user-name-${id} user-country-${id}`}
            >
              <UserInfoName id={`user-name-${id}`}>{userName}</UserInfoName>
              <UserInfoCountry id={`user-country-${id}`}>
                {country}
              </UserInfoCountry>
            </WrapperUserInfo>
            <UserInfoAvatar src={avatar} alt={userName} role="presentation" />
          </Wrapper>
        ))}
        <UserMenuOpener
          onClick={handleUserMenuOpen}
          aria-haspopup="true"
          aria-label="Open user menu"
        >
          <UserMenuButtonIcon src="icon/arrow-down_icon.svg" alt="User" />
        </UserMenuOpener>
      </UserInfo>
      {isUserMenuOpen && (
        <Wrapper>
          <UserMenuPupUp aria-label="User menu popup">
            <ButtonLogout onClick={handleLogOut}>Log out</ButtonLogout>
          </UserMenuPupUp>
        </Wrapper>
      )}
    </UserBlockContainer>
  );
};
