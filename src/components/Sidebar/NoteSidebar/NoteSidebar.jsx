import { StyledNoteSidebar } from "./NoteSidebar.styled"

export const NoteSidebar = () => {
  return (
    <StyledNoteSidebar>
      <div></div>
      <h3>Thoughts Time</h3>
      <p>
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </p>
      <input type="text" placeholder="Write a message" />
    </StyledNoteSidebar>
  );
}
