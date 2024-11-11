import {
  ProjectDescription,
  ProjectItemWrapper,
  ProjectTopWrapper,
  StyledProjectList,
} from "./ProjectList.styled";

const projects = [
  {
    id: 1,
    name: "Mobile App",
    description: "Description for Mobile App",
    image: "https://via.placeholder.com/150",
    createdAt: "2023-07-10",
    updatedAt: "2023-07-10",
    status: "Active",
  },
  {
    id: 2,
    name: "Website Redesign",
    description: "Description for Website Redesign",
    image: "https://via.placeholder.com/150",
    createdAt: "2023-07-10",
    updatedAt: "2023-07-10",
    status: "Active",
  },
  {
    id: 3,
    name: "Design System",
    description: "Description for Design System",
    image: "https://via.placeholder.com/150",
    createdAt: "2023-07-10",
    updatedAt: "2023-07-10",
    status: "Active",
  },
  {
    id: 4,
    name: "Wireframes",
    description: "Description for Wireframes",
    image: "https://via.placeholder.com/150",
    createdAt: "2023-07-10",
    updatedAt: "2023-07-10",
    status: "Active",
  },
];

export const ProjectList = () => {
  return (
    <StyledProjectList>
      <ProjectTopWrapper>
        <h2>My projects</h2>
        <button className="add-project">
          <img src="icon/plus_icon.svg" alt="Add Project" />
        </button>
      </ProjectTopWrapper>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItemWrapper>
              <a href="#" aria-label="Go to project" className="project-item">
                <div className="project-status" aria-hidden="true"></div>
                <h3>{project.name}</h3>
              </a>
              <button>
                <img src="icon/dots_icon.svg" alt="Submenu icon" />
              </button>
            </ProjectItemWrapper>

            <ProjectDescription>
              <p>{project.description}</p>
              <p>{project.createdAt}</p>
              <p>{project.updatedAt}</p>
              <p>{project.status}</p>
            </ProjectDescription>
          </li>
        ))}
      </ul>
    </StyledProjectList>
  );
};
