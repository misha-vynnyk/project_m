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
  Wrapper,
} from "./UserBlock.styled";

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
    userName: "Joanne Doe",
    country: "United States",
    avatar: "image/avatar-1.jpeg",
  },
];

export const UserBlock = () => {
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
          <>
            <Wrapper
              key={id}
              aria-labelledby={`user-name-${id} user-country-${id}`}
            >
              <UserInfoName id={`user-name-${id}`}>{userName}</UserInfoName>
              <UserInfoCountry id={`user-country-${id}`}>{country}</UserInfoCountry>
            </Wrapper>
            <UserInfoAvatar src={avatar} alt={userName} role="presentation" />
          </>
        ))}
        <UserMenuOpener aria-haspopup="true" aria-label="Open user menu">
          <UserMenuButtonIcon src="icon/arrow-down_icon.svg" alt="User" />
        </UserMenuOpener>
      </UserInfo>
    </UserBlockContainer>
  );
};
