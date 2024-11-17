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
    <UserBlockContainer>
      <UserMenu>
        {userMenu.map(({ id, name, icon, ariaLabel }) => (
          <UserMenuButton aria-label={ariaLabel} key={id}>
            <UserMenuButtonIcon src={icon} alt={name} />
          </UserMenuButton>
        ))}
      </UserMenu>

      <UserInfo>
        {userInfo.map(({ id, userName, country, avatar }) => (
          <>
            <Wrapper key={id}>
              <UserInfoName>{userName}</UserInfoName>
              <UserInfoCountry>{country}</UserInfoCountry>
            </Wrapper>
            <UserInfoAvatar src={avatar} alt={userName} />
          </>
        ))}
        <UserMenuOpener>
          <UserMenuButtonIcon src="icon/arrow-down_icon.svg" alt="User" />
        </UserMenuOpener>
      </UserInfo>
    </UserBlockContainer>
  );
};
