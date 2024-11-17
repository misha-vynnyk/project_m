import {
  SearchBarInput,
  StyledSearchBar,
  StyledSearchBarIcon,
} from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarIcon
        src="icon/search_icon.svg"
        aria-hidden= "true"
        alt=""
      />
      <SearchBarInput
        aria-label="Search on your page"
        type="text"
        placeholder="Search for anything..."
      />
    </StyledSearchBar>
  );
};
