import { MenuContainer, ListMenu, ListItem } from "./Menu.styled";

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: "icon/home_icon.svg",
  },
  {
    id: 2,
    name: "Massages",
    icon: "icon/message_icon.svg",
  },
  {
    id: 3,
    name: "Tasks",
    icon: "icon/task_icon.svg",
  },
  {
    id: 4,
    name: "Members",
    icon: "icon/members_icon.svg",
  },
  {
    id: 5,
    name: "Settings",
    icon: "icon/settings_icon.svg",
  },
];

export default function Menu() {
  return (
    <MenuContainer>
      <ListMenu>
        {menuItems.map((item) => (
          <ListItem key={item.id}>
            <img src={item.icon} alt={item.name} />
            <a href="#">
              <span>{item.name}</span>
            </a>
          </ListItem>
        ))}
      </ListMenu>
    </MenuContainer>
  );
}
