import styled from "styled-components";

export const MenuContainer = styled.div`
  padding-left: 1rem;
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`;
