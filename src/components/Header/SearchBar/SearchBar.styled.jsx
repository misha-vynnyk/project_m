import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  min-width: 6rem;
  height: 3rem;
  margin-right: 2rem;
  background-color: ${({ theme }) => theme.colors.secondaryLightBackground};
  border-radius: 8px;

  @media  (max-width: ${({ theme }) => theme.desktop}) {
    height: 2.5rem;
    margin-right: 1rem;
  }

  @media  (max-width: ${({ theme }) => theme.tablet}) {
    height: 2rem;
  }

  @media  (max-width: ${({ theme }) => theme.mobileL}) {
    display: none;
  }
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

  @media  (max-width: ${({ theme }) => theme.desktop}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`;

export const StyledSearchBarIcon = styled.img`
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    margin-left: 0.5rem;
    height: 1.2rem;
    width: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 0.3rem;
    height: 1rem;
    width: 1rem;
  }
`;
