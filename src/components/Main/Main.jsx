import { useState } from "react";
// import useUserPosts from "../../hooks/useUserPosts";
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
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  padding: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

// Component for creating a new post
const NewPostForm = ({ onAddPost }) => {
  const [newPost, setNewPost] = useState({
    post: "",
    isPublic: false,
    whoPublished: "",
    sharedTo: "",
    likes: 0,
    plays: 0,
  });

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submits the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newPost.post.trim() &&
      newPost.whoPublished.trim() &&
      newPost.sharedTo.trim()
    ) {
      onAddPost(newPost);
      setNewPost({
        post: "",
        isPublic: false,
        whoPublished: "",
        sharedTo: "",
        likes: 0,
        plays: 0,
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        name="post"
        value={newPost.post}
        onChange={handleChange}
        placeholder="Post content"
      />
      <input
        name="whoPublished"
        value={newPost.whoPublished}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        name="sharedTo"
        value={newPost.sharedTo}
        onChange={handleChange}
        placeholder="Shared To"
      />
      <button type="submit">Add Post</button>
    </StyledForm>
  );
};

const listCardState = [
  {
    id: 1,
    title: "To Do",
    lineColor: "#5030E5",
  },
  {
    id: 2,
    title: "In Progress",
    lineColor: "#FFA500",
  },
  {
    id: 3,
    title: "Done",
    lineColor: "#8BC48A",
  },
];

const listProjects = [
  {
    id: 1,
    status: "To Do",
    level: "low",
    levelColor: "#D58D49",
    levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
    title: "Brainstorming",
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    image: "",
  },
  {
    id: 2,
    status: "In Progress",
    level: "medium",
    levelColor: "#8BC48A",
    levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
    title: "Research",
    description:
      "User research helps you to create an optimal product for users.",
    image: "",
  },
  {
    id: 3,
    status: "Done",
    level: "high",
    levelColor: "#5030E5",
    levelBackgroundColor: "rgba(80, 48, 229, 0.2)",
    title: "Wireframes",
    description:
      "Low fidelity wireframes include the most basic content and visuals.",
    image: "",
  },
  {
    id: 4,
    status: "To Do",
    level: "low",
    levelColor: "#D58D49",
    levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
    title: "Testing",
    description:
      "Find out whether your prototype meets users' expectations.",
    image: "",
  },
  {
    id: 5,
    status: "In Progress",
    level: "medium",
    levelColor: "#8BC48A",
    levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
    title: "Design",
    description: "The wireframe stage handles the look and feel.",
    image: "",
  }
];

// const listUsers = [
//   {
//     id: 1,
//     userName: "Anima Agrawal",
//     userPhoto: "image/user-1.png",
//   },
//   {
//     id: 2,
//     userName: "Leila Farhana",
//     userPhoto: "image/user-2.png",
//   },
//   {
//     id: 3,
//     userName: "Nick Jhonson",
//     userPhoto: "image/user-3.png",
//   },
//   {
//     id: 4,
//     userName: "Sanjana Shrestha",
//     userPhoto: "image/user-4.png",
//   },
// ];

const Main = ({ isSidebarOpen }) => {
  // const { posts, addPost, removePost } = useUserPosts([]);

  return (
    <MainStyled>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainContent $isSidebarOpen={isSidebarOpen}>
        <CardStateContainer>
          {listCardState.map((card) => (
            <CardState key={card.id} title={card.title}>
              <TitleStateWrapper $lineColor={card.lineColor}>
                <TitleCardState $lineColor={card.lineColor}>
                  {card.title}
                  <CountProjectsInState aria-label="State Project">10</CountProjectsInState>
                </TitleCardState>
                {card.id === 1 && (
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

              {listProjects.map((project) => (
                <ProjectsCard key={project.id}>
                  <ProjectHeaderContainer>
                    <ProjectLevel
                      aria-label="Project level"
                      $levelColor={project.levelColor}
                      $levelBg={project.levelBackgroundColor}
                    >
                      {project.level}
                    </ProjectLevel>
                    <ProjectMenu aria-action="Open menu in Project Card" role="button">
                      <IconProjectMenu src="icon/dots_icon.svg" alt="Menu" />
                    </ProjectMenu>
                  </ProjectHeaderContainer>

                  <ProjectDescriptionContainer>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                  </ProjectDescriptionContainer>

                  <ProjectFooterContainer>
                    <ProjectFooterPeople>
                      <img src="image/Group 633.png" alt="Persons" />
                    </ProjectFooterPeople>
                    <ProjectFooterInfoContainer>
                      <ProjectFooterComments>
                        <img src="icon/comments_icon.svg" alt="Comments" />
                        10 comments
                      </ProjectFooterComments>

                      <ProjectFooterCountFiles>
                        <img src="icon/folder_icon.svg" alt="Folder" />3 files
                      </ProjectFooterCountFiles>
                    </ProjectFooterInfoContainer>
                  </ProjectFooterContainer>
                </ProjectsCard>
              ))}
            </CardState>
          ))}
        </CardStateContainer>
      </MainContent>
    </MainStyled>
  );
};

export default Main;

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

NewPostForm.propTypes = {
  onAddPost: PropTypes.func.isRequired,
};

{
  /* <div>
  <NewPostForm onAddPost={addPost} />

  <section>
    {posts.map((post) => (
      <div key={post.id}>
        <h3>{post.post}</h3>
        <p>Published by: {post.whoPublished}</p>
        <p>Shared To: {post.sharedTo}</p>
        <button onClick={() => removePost(post.id)}>Remove Post</button>
      </div>
    ))}
  </section>
</div>


<div>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
  <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
    temporibus ut perferendis placeat omnis dolores alias saepe modi,
    similique tempore itaque laboriosam molestias dicta porro
    accusantium in eaque recusandae tenetur quo debitis! Modi animi quam
    ratione iure molestias ipsum perspiciatis eius consectetur, delectus
    suscipit. Et nisi maiores nulla atque voluptatem.
  </section>
</div> */
}
