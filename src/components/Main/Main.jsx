import Sidebar from "../Sidebar/Sidebar";
import {
  AddProjectButton,
  AddProjectButtonImg,
  CardStateContainer,
  CardState,
  MainContent,
  MainStyled,
  TitleCardState,
  TitleStateWrapper,
  CountProjectsInState,
  ProjectsCard,
  ProjectHeaderContainer,
  ProjectDescriptionContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectMenu,
  ProjectLevel,
  ProjectFooterContainer,
  ProjectFooterPeople,
  ProjectFooterInfoContainer,
  ProjectFooterComments,
  ProjectFooterCountFiles,
  IconProjectMenu,
} from "./Main.styled";
import initialData from "../../data/initial-data";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import PropTypes from "prop-types";
import { useState } from "react";

const TaskList = styled.div``;

const Main = ({ isSidebarOpen }) => {
  const [initialDataArray, setInitialDataArray] = useState(initialData);

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

    console.log("destinationTaskIds", destinationTaskIds);
    

    return {
      updatedStartColumn: { ...startColumn, taskIds: sourceTaskIds },
      updatedFinishColumn: { ...finishColumn, taskIds: destinationTaskIds },
    };
  };

  const onDragEnd = (result) => {
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
    }
  };

  return (
    <MainStyled>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainContent $isSidebarOpen={isSidebarOpen}>
        <CardStateContainer>
          <DragDropContext onDragEnd={onDragEnd}>
            {initialDataArray.columnOrder.map((columnId) => {
              const column = initialDataArray.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => initialDataArray.tasks[taskId]
              );
              return (
                <CardState key={column.id} column={column} tasks={tasks}>
                  <TitleStateWrapper $lineColor={column.lineColor}>
                    <TitleCardState $lineColor={column.lineColor}>
                      {column.title}
                      <CountProjectsInState aria-label="State Project">
                        10
                      </CountProjectsInState>
                    </TitleCardState>
                    {column.id === "column-1" && (
                      <AddProjectButton
                        aria-haspopup="dialog"
                        aria-controls="new-project-popup"
                        aria-label="Create new project"
                      >
                        <AddProjectButtonImg
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
                        {tasks.map((task, index) => (
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
                                    $levelColor={task.levelColor}
                                    $levelBg={task.levelBackgroundColor}
                                  >
                                    {task.level}
                                  </ProjectLevel>
                                  <ProjectMenu role="button">
                                    <IconProjectMenu
                                      src="icon/dots_icon.svg"
                                      alt="Menu"
                                    />
                                  </ProjectMenu>
                                </ProjectHeaderContainer>

                                <ProjectDescriptionContainer>
                                  <ProjectTitle>{task.content}</ProjectTitle>
                                  <ProjectDescription>
                                    {task.description}
                                  </ProjectDescription>
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
                        ))}
                        {provided.placeholder}
                        {column.taskIds.length === 0 && (
                          <div style={{ textAlign: "center", color: "#aaa" }}>
                            Drop tasks here
                          </div>
                        )}
                      </TaskList>
                    )}
                  </Droppable>
                </CardState>
              );
            })}
          </DragDropContext>
        </CardStateContainer>
      </MainContent>
    </MainStyled>
  );
};

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Main;
