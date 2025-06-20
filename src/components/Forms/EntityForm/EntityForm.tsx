import { FC, useState } from "react";
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
import CloseButton from "../../Button/CloseButton/CloseButton";

type ProjectFormTextType = {
  formTitle: string;
  taskTitle: string;
  description: string;
  level: string;
  status: string;
  attachFiles: string;
  addTask: string;
};

type EntityFormProps = {
  newProjectFormData: ProjectFormTextType;
  setNewTaskIsOpen: (boolean) => void;
  onSubmit: (data: FormType) => void;
};

type FormType = {
  content: string;
  description: string;
  level: string;
  status: string;
};

const EntityForm: FC<EntityFormProps> = ({
  setNewTaskIsOpen,
  onSubmit,
  newProjectFormData: {
    formTitle,
    taskTitle,
    description,
    level,
    status,
    attachFiles,
    addTask,
  },
}) => {
  const [formDataProject, setFormDataProject] = useState<FormType>({
    content: "",
    description: "",
    level: "",
    status: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formDataProject);
  };

  return (
    <EntityFormStyled>
      <FormStyled onSubmit={handleSubmit}>
        <CloseButton onClick={() => setNewTaskIsOpen(false)} />
        <FormTitleStyled>{formTitle}</FormTitleStyled>
        <LabelStyled>{taskTitle}</LabelStyled>
        <InputStyled
          value={formDataProject.content}
          type="text"
          placeholder="e.g. Brainstorming Session"
          onChange={(e) =>
            setFormDataProject((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <LabelStyled>{description}</LabelStyled>
        <TextAreaStyled
          value={formDataProject.description}
          placeholder="What needs to be done?"
          onChange={(e) =>
            setFormDataProject((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />

        <SelectContainerStyled>
          <Container>
            <LabelStyled>{level}</LabelStyled>
            <SelectStyled
              value={formDataProject.level}
              onChange={(e) =>
                setFormDataProject((prev) => ({
                  ...prev,
                  level: e.target.value,
                }))
              }
            >
              <SelectOptionStyled>Low</SelectOptionStyled>
              <SelectOptionStyled>Medium</SelectOptionStyled>
              <SelectOptionStyled>Hight</SelectOptionStyled>
            </SelectStyled>
          </Container>

          <Container>
            <LabelStyled>{status}</LabelStyled>
            <SelectStyled
              value={formDataProject.status}
              onChange={(e) =>
                setFormDataProject((prev) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
            >
              <SelectOptionStyled>To Do</SelectOptionStyled>
              <SelectOptionStyled>In Progress</SelectOptionStyled>
              <SelectOptionStyled>Done</SelectOptionStyled>
            </SelectStyled>
          </Container>
        </SelectContainerStyled>

        <LabelStyled htmlFor="fileUpload">{attachFiles} </LabelStyled>
        <UploadButton>
          <span>📎</span> Attach Files
        </UploadButton>

        <InputStyled
          id="fileUpload"
          type="file"
          multiple
          style={{ display: "none" }}
        />

        <ButtonFormStyled type="submit">{addTask}</ButtonFormStyled>
      </FormStyled>
    </EntityFormStyled>
  );
};

export default EntityForm;
