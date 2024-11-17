import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  min-width: 8rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};
  border-radius: 8px;
`;

export const SearchBarInput = styled.input`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  background-color: transparent;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  border-radius: 8px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const StyledSearchBarIcon = styled.img`
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
`;
