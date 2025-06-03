import { useEffect, useState } from "react";
import {
  AddProjectButton,
  AddProjectButtonImg,
  CardState,
  CardStateContainer,
  Container,
  CountProjectsInState,
  DropInfo,
  IconTaskMenu,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectFooterComments,
  ProjectFooterContainer,
  ProjectFooterCountFiles,
  ProjectFooterInfoContainer,
  ProjectFooterPeople,
  ProjectHeaderContainer,
  ProjectImage,
  ProjectLevel,
  ProjectsCard,
  ProjectTitle,
  TaskButton,
  TaskList,
  TaskMenu,
  TaskMenuIcon,
  TaskPupUp,
  TitleCardState,
  TitleStateWrapper,
} from "./ProjectTasks.styled";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ProjectTasksStyled } from "./ProjectTasks.styled";
import EntityForm from "../../../Forms/EntityForm/EntityForm";
import {
  updateData,
  updateTaskOrderInFirestore,
} from "../../../../firebase/firestore/updateData";
import { getDataById } from "../../../../firebase/firestore/getData";
import { useDeleteData } from "../../../../firebase/firestore/deleteData";
import { tasksVariable } from "../../../../global_styles/theme";
// import { doc, setDoc } from "firebase/firestore";
// import initialData from "../../../../data/initial-data";
// import { db } from "../../../../firebase/firebase";

const projectName = "projects";
const projectId = "project-5";

// export const uploadInitialData = async () => {
//   try {
//     const docRef = doc(db, "projects", "project-5"); // "boards" — колекція, "board-1" — ID документу
//     await setDoc(docRef, initialData);
//     console.log("✅ Дані успішно завантажено в Firestore");
//   } catch (error) {
//     console.error("❌ Помилка при завантаженні:", error);
//   }
// };

// uploadInitialData();

const ProjectTasks = () => {
  const [initialDataArray, setInitialDataArray] = useState(null);
  const [newTaskFormIsOpen, setNewTaskIsOpen] = useState(false);

  const [taskMenuIsOpen, setTaskMenuIsOpen] = useState(null);
  const { deleteData } = useDeleteData();

  const newProjectFormData = {
    formTitle: "Add Task to Project",
    taskTitle: "Task Title",
    description: "Description",
    level: "Priority",
    status: "Status",
    attachFiles: "Attach Files",
    addTask: "Add Task",
  };

  const loadTasks = async () => {
    const taskData = await getDataById({
      collectionName: projectName,
      docId: projectId,
    });

    setInitialDataArray(taskData);
    console.log("initialArray:", taskData);
  };

  useEffect(() => {
    loadTasks();
  }, []);
  // console.log("initialArray:", initialDataArray);

  const addTask = async (data) => {
    const newId = `task-${Object.keys(initialDataArray.tasks).length + 1}`;
    const columnId = "column-1";
    const newTask = {
      id: newId,
      ...data,
    };

    setInitialDataArray((prev) => ({
      ...prev,
      tasks: {
        ...prev.tasks,
        [newId]: newTask,
      },
      colums: {
        ...prev.colums,
        [columnId]: {
          ...prev.columns[columnId],
          taskIds: [...prev.columns[columnId].taskIds],
        },
      },
    }));

    await updateData({
      collectionName: projectName,
      docId: projectId, // or your projectId
      updatedData: {
        [`tasks.${newId}`]: newTask,
        [`columns.${columnId}.taskIds`]: [
          ...initialDataArray.columns[columnId].taskIds,
          newId,
        ],
      },
    }).finally(loadTasks());
  };

  const deleteTask = async (taskId, columnId) => {
    console.log("taskId:", taskId, "columnId:", columnId);

    try {
      const updatedTaskIds = await deleteData({
        projectId: projectId,
        taskId,
        columnId,
        currentTaskIds: initialDataArray.columns[columnId].taskIds,
      });

      // Update local state
      setInitialDataArray((prev) => {
        // eslint-disable-next-line no-unused-vars
        const { [taskId]: _, ...restTasks } = prev.tasks;

        return {
          ...prev,
          tasks: restTasks,
          columns: {
            ...prev.columns,
            [columnId]: {
              ...prev.columns[columnId],
              taskIds: updatedTaskIds,
            },
          },
        };
      });
    } catch (error) {
      console.error("Не вдалося видалити таску:", error);
    }
  };

  const handleAddTask = (data) => {
    addTask(data);
  };

  const handleDeleteTask = (taskId, columnId) => {
    deleteTask(taskId, columnId);
  };

  const handleOpenMenuTask = (id) => {
    if (taskMenuIsOpen === null) {
      setTaskMenuIsOpen(id);
    } else {
      setTaskMenuIsOpen(null);
    }
  };

  const moveTaskBetweenColumns = (
    startColumn,
    finishColumn,
    sourceIndex,
    destinationIndex,
    draggableId
  ) => {
    // Delete task from the source column
    const sourceTaskIds = Array.from(startColumn.taskIds);
    sourceTaskIds.splice(sourceIndex, 1);

    // Add task to the destination column
    const destinationTaskIds = Array.from(finishColumn.taskIds || []);
    destinationTaskIds.splice(destinationIndex, 0, draggableId); // Add the dragged task to the destination column

    return {
      updatedStartColumn: { ...startColumn, taskIds: sourceTaskIds },
      updatedFinishColumn: { ...finishColumn, taskIds: destinationTaskIds },
    };
  };

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return; // If dropped outside the list
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return; // Element was dropped back into its original position
    }

    const start = initialDataArray.columns[source.droppableId];
    const finish = initialDataArray.columns[destination.droppableId];

    if (start === finish) {
      // Dragging within the same column
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setInitialDataArray((prevData) => ({
        ...prevData,
        columns: {
          ...prevData.columns,
          [updatedColumn.id]: updatedColumn,
        },
      }));

      // Update Firestore
      await updateTaskOrderInFirestore({
        projectId: projectId, // Change for your projectId
        updatedStartColumn: updatedColumn,
        updatedFinishColumn: updatedColumn,
      });
    } else {
      // Dragging between columns
      const { updatedStartColumn, updatedFinishColumn } =
        moveTaskBetweenColumns(
          start,
          finish,
          source.index,
          destination.index,
          draggableId
        );

      setInitialDataArray((prevData) => ({
        ...prevData,
        columns: {
          ...prevData.columns,
          [updatedStartColumn.id]: updatedStartColumn,
          [updatedFinishColumn.id]: updatedFinishColumn,
        },
      }));

      // Update Firestore
      await updateTaskOrderInFirestore({
        projectId: projectId, // Change for your projectId
        updatedStartColumn,
        updatedFinishColumn,
      });
    }
  };
  return (
    <ProjectTasksStyled>
      <CardStateContainer>
        {newTaskFormIsOpen && (
          <EntityForm
            newProjectFormData={newProjectFormData}
            setNewTaskIsOpen={setNewTaskIsOpen}
            onSubmit={handleAddTask}
          />
        )}
        <DragDropContext onDragEnd={onDragEnd}>
          {initialDataArray &&
            initialDataArray.columnOrder.map((columnId) => {
              const column = initialDataArray.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => initialDataArray.tasks[taskId]
              );
              return (
                <CardState key={column.id} $column={column} $tasks={tasks}>
                  <TitleStateWrapper $lineColor={column.lineColor}>
                    <TitleCardState $lineColor={column.lineColor}>
                      {column.title}
                      <CountProjectsInState aria-label="State Project">
                        {column.taskIds.length}
                      </CountProjectsInState>
                    </TitleCardState>
                    {column.id === "column-1" && (
                      <AddProjectButton
                        aria-haspopup="dialog"
                        aria-controls="new-project-popup"
                        aria-label="Create new project"
                      >
                        <AddProjectButtonImg
                          onClick={() => setNewTaskIsOpen(true)}
                          src="icon/add-square_icon.svg"
                          aria-hidden="true"
                        />
                      </AddProjectButton>
                    )}
                  </TitleStateWrapper>

                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {tasks.map((task, index) => {
                          const levelMap = {
                            low: {
                              color: tasksVariable.levelColorRed,
                              background: tasksVariable.levelBackgroundColorRed,
                            },
                            medium: {
                              color: tasksVariable.levelColorOrange,
                              background:
                                tasksVariable.levelBackgroundColorOrange,
                            },
                            high: {
                              color: tasksVariable.levelColorBlue,
                              background:
                                tasksVariable.levelBackgroundColorBlue,
                            },
                            completed: {
                              color: tasksVariable.levelColorGreen,
                              background:
                                tasksVariable.levelBackgroundColorGreen,
                            },
                          };

                          const {
                            color: statusColor = "",
                            background: backgroundStatusColor = "",
                          } = levelMap[task.level] || {};
                          return (
                            <Draggable
                              draggableId={task.id}
                              key={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <ProjectsCard
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <ProjectHeaderContainer>
                                    <ProjectLevel
                                      aria-label="Project level"
                                      $levelColor={statusColor}
                                      $levelBg={backgroundStatusColor}
                                    >
                                      {task.level}
                                    </ProjectLevel>
                                    <TaskMenu
                                      role="button"
                                      onClick={() =>
                                        handleOpenMenuTask(task.id)
                                      }
                                    >
                                      <IconTaskMenu
                                        src="icon/dots_icon.svg"
                                        alt="Menu"
                                      />
                                    </TaskMenu>
                                    <TaskPupUp
                                      $taskMenuIsOpen={taskMenuIsOpen}
                                      $taskId={task.id}
                                    >
                                      <TaskButton>
                                        <TaskMenuIcon src="icon/pen_icon.png" />
                                        Edit Task
                                      </TaskButton>
                                      <TaskButton
                                        onClick={() =>
                                          handleDeleteTask(task.id, columnId)
                                        }
                                      >
                                        <TaskMenuIcon src="icon/delete_icon.png" />
                                        Delete Task
                                      </TaskButton>
                                      <TaskButton>
                                        <TaskMenuIcon src="icon/right-arrow_icon.png" />
                                        Move to Column
                                      </TaskButton>
                                    </TaskPupUp>
                                  </ProjectHeaderContainer>
                                  <ProjectDescriptionContainer>
                                    <ProjectTitle>{task.content}</ProjectTitle>
                                    {task?.image ? (
                                      <Container>
                                        <ProjectImage
                                          src={task.image}
                                          alt={task.content || "Project image"}
                                        />
                                      </Container>
                                    ) : (
                                      <ProjectDescription>
                                        {task.description ||
                                          "No Description Available"}
                                      </ProjectDescription>
                                    )}
                                  </ProjectDescriptionContainer>

                                  <ProjectFooterContainer>
                                    <ProjectFooterPeople>
                                      <img
                                        src="image/Group 633.png"
                                        alt="Persons"
                                      />
                                    </ProjectFooterPeople>
                                    <ProjectFooterInfoContainer>
                                      <ProjectFooterComments>
                                        <img
                                          src="icon/comments_icon.svg"
                                          alt="Comments"
                                        />
                                        10 comments
                                      </ProjectFooterComments>

                                      <ProjectFooterCountFiles>
                                        <img
                                          src="icon/folder_icon.svg"
                                          alt="Folder"
                                        />
                                        3 files
                                      </ProjectFooterCountFiles>
                                    </ProjectFooterInfoContainer>
                                  </ProjectFooterContainer>
                                </ProjectsCard>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                        {column.taskIds.length === 0 && (
                          <DropInfo
                            style={{ textAlign: "center", color: "#aaa" }}
                          >
                            Drop tasks here
                          </DropInfo>
                        )}
                      </TaskList>
                    )}
                  </Droppable>
                </CardState>
              );
            })}
        </DragDropContext>
      </CardStateContainer>
    </ProjectTasksStyled>
  );
};

export default ProjectTasks;
