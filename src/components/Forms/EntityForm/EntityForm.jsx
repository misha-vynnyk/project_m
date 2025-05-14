import { useState } from "react";
import {
  ButtonFormStyled,
  Container,
  EntityFormStyled,
  FormStyled,
  FormTitleStyled,
  InputStyled,
  LabelStyled,
  SelectContainerStyled,
  SelectOptionStyled,
  SelectStyled,
  TextAreaStyled,
  UploadButton,
} from "./EntityForm.styled";

const EntityForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To Do");

  return (
    <EntityFormStyled>
      <FormStyled>
        <FormTitleStyled>Add Task to Proiect</FormTitleStyled>
        <LabelStyled>Task Title</LabelStyled>
        <InputStyled
          value={title}
          type="text"
          placeholder="e.g. Brainstorming Session"
          onChange={(e) => setTitle(e.target.value)}
        />
        <LabelStyled>Description</LabelStyled>
        <TextAreaStyled
          value={description}
          type="textarea"
          placeholder="What needs to be done?"
          onChange={(e) => setDescription(e.target.value)}
        />

        <SelectContainerStyled>
          <Container>
            <LabelStyled>Priority</LabelStyled>
            <SelectStyled
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <SelectOptionStyled>Low</SelectOptionStyled>
              <SelectOptionStyled>Medium</SelectOptionStyled>
              <SelectOptionStyled>Hight</SelectOptionStyled>
            </SelectStyled>
          </Container>

          <Container>
            <LabelStyled>Status</LabelStyled>
            <SelectStyled
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <SelectOptionStyled>To Do</SelectOptionStyled>
              <SelectOptionStyled>In Progress</SelectOptionStyled>
              <SelectOptionStyled>Done</SelectOptionStyled>
            </SelectStyled>
          </Container>
        </SelectContainerStyled>

        <LabelStyled htmlFor="fileUpload">
          <UploadButton>
            <span>📎</span> Attach Files
          </UploadButton>
        </LabelStyled>
        <InputStyled
          id="fileUpload"
          type="file"
          multiple
          style={{ display: "none" }}
        />

        <ButtonFormStyled>Add Task</ButtonFormStyled>
      </FormStyled>
    </EntityFormStyled>
  );
};

export default EntityForm;
