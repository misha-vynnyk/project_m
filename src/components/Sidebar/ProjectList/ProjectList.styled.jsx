import styled from "styled-components";

export const ProjectTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.lightText};
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .add-project {
    display: flex;
    img {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }
`;

export const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style: none;
  }

  .project-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h3 {
      color: ${({ theme }) => theme.colors.lightText};
      font-family: ${({ theme }) => theme.fonts.primaryFont};
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      text-align: left;
    }

    img {
      justify-self: end;
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }

  .project-status {
    display: block;
    background-color: green;
    border-radius: 8px;
    width: 0.5rem;
    height: 0.5rem;
  }
`;

export const ProjectItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  &:hover {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;


export const ProjectDescription = styled.div`
  display: none;
`
