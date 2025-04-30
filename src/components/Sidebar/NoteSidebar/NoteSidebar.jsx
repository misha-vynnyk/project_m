import { BackgroundLight, NoteDescription, NoteInput, NoteTitle, StyledNoteSidebar } from "./NoteSidebar.styled"

export const NoteSidebar = () => {
  return (
    <StyledNoteSidebar>
      <BackgroundLight/>
      <NoteTitle>Thoughts Time</NoteTitle>
      <NoteDescription>
        We don’t have any notice for you, till then you can share your thoughts
        with your peers.
      </NoteDescription>
      <NoteInput type="text" placeholder="Write a message" />
    </StyledNoteSidebar>
  );
}
