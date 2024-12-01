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

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // If there's no destination (dropped outside), return
    if (!destination) {
      return;
    }

    // If the item is dropped at the same position, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Reordering tasks within the same column
    if (source.droppableId === destination.droppableId) {
      const column = initialDataArray.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1); // Remove the task from its initial position
      newTaskIds.splice(destination.index, 0, draggableId); // Insert it at the new position

      const updatedColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const updatedData = {
        ...initialDataArray,
        columns: {
          ...initialDataArray.columns,
          [updatedColumn.id]: updatedColumn,
        },
      };

      setInitialDataArray(updatedData);
    } else {
      // Moving task to a different column
      const sourceColumn = initialDataArray.columns[source.droppableId];
      const destinationColumn =
        initialDataArray.columns[destination.droppableId];

      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      sourceTaskIds.splice(source.index, 1); // Remove the task from the source column

      const destinationTaskIds = Array.from(destinationColumn.taskIds);
      destinationTaskIds.splice(destination.index, 0, draggableId); // Add the task to the destination column

      const updatedSourceColumn = {
        ...sourceColumn,
        taskIds: sourceTaskIds,
      };

      const updatedDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationTaskIds,
      };

      const updatedData = {
        ...initialDataArray,
        columns: {
          ...initialDataArray.columns,
          [updatedSourceColumn.id]: updatedSourceColumn,
          [updatedDestinationColumn.id]: updatedDestinationColumn,
        },
      };

      setInitialDataArray(updatedData);
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
