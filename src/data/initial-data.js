// const listCardState = [
//   {
//     id: 1,
//     title: "To Do",
//     lineColor: "#5030E5",
//     listProjects: [
//       {
//         id: 1,
//         status: "To Do",
//         level: "low",
//         levelColor: "#D58D49",
//         levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//         title: "Brainstorming",
//         description:
//           "Brainstorming brings team members' diverse experience into play. ",
//         image: "",
//       },
//       // {
//       //   id: 2,
//       //   status: "In Progress",
//       //   level: "medium",
//       //   levelColor: "#8BC48A",
//       //   levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//       //   title: "Research",
//       //   description:
//       //     "User research helps you to create an optimal product for users.",
//       //   image: "",
//       // },
//       // {
//       //   id: 3,
//       //   status: "Done",
//       //   level: "high",
//       //   levelColor: "#5030E5",
//       //   levelBackgroundColor: "rgba(80, 48, 229, 0.2)",
//       //   title: "Wireframes",
//       //   description:
//       //     "Low fidelity wireframes include the most basic content and visuals.",
//       //   image: "",
//       // },
//       // {
//       //   id: 4,
//       //   status: "To Do",
//       //   level: "low",
//       //   levelColor: "#D58D49",
//       //   levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//       //   title: "Testing",
//       //   description:
//       //     "Find out whether your prototype meets users' expectations.",
//       //   image: "",
//       // },
//       // {
//       //   id: 5,
//       //   status: "In Progress",
//       //   level: "medium",
//       //   levelColor: "#8BC48A",
//       //   levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//       //   title: "Design",
//       //   description: "The wireframe stage handles the look and feel.",
//       //   image: "",
//       // },
//     ],
//   },
//   {
//     id: 2,
//     title: "In Progress",
//     lineColor: "#FFA500",
//     listProjects: [
//       // {
//       //   id: 1,
//       //   status: "To Do",
//       //   level: "low",
//       //   levelColor: "#D58D49",
//       //   levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//       //   title: "Brainstorming",
//       //   description:
//       //     "Brainstorming brings team members' diverse experience into play. ",
//       //   image: "",
//       // },
//       {
//         id: 2,
//         status: "In Progress",
//         level: "medium",
//         levelColor: "#8BC48A",
//         levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//         title: "Research",
//         description:
//           "User research helps you to create an optimal product for users.",
//         image: "",
//       },
//       // {
//       //   id: 3,
//       //   status: "Done",
//       //   level: "high",
//       //   levelColor: "#5030E5",
//       //   levelBackgroundColor: "rgba(80, 48, 229, 0.2)",
//       //   title: "Wireframes",
//       //   description:
//       //     "Low fidelity wireframes include the most basic content and visuals.",
//       //   image: "",
//       // },
//       // {
//       //   id: 4,
//       //   status: "To Do",
//       //   level: "low",
//       //   levelColor: "#D58D49",
//       //   levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//       //   title: "Testing",
//       //   description:
//       //     "Find out whether your prototype meets users' expectations.",
//       //   image: "",
//       // },
//       // {
//       //   id: 5,
//       //   status: "In Progress",
//       //   level: "medium",
//       //   levelColor: "#8BC48A",
//       //   levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//       //   title: "Design",
//       //   description: "The wireframe stage handles the look and feel.",
//       //   image: "",
//       // },
//     ],
//   },
//   {
//     id: 3,
//     title: "Done",
//     lineColor: "#8BC48A",
//     listProjects: [
//       // {
//       //   id: 1,
//       //   status: "To Do",
//       //   level: "low",
//       //   levelColor: "#D58D49",
//       //   levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//       //   title: "Brainstorming",
//       //   description:
//       //     "Brainstorming brings team members' diverse experience into play. ",
//       //   image: "",
//       // },
//       // {
//       //   id: 2,
//       //   status: "In Progress",
//       //   level: "medium",
//       //   levelColor: "#8BC48A",
//       //   levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//       //   title: "Research",
//       //   description:
//       //     "User research helps you to create an optimal product for users.",
//       //   image: "",
//       // },
//       {
//         id: 3,
//         status: "Done",
//         level: "high",
//         levelColor: "#5030E5",
//         levelBackgroundColor: "rgba(80, 48, 229, 0.2)",
//         title: "Wireframes",
//         description:
//           "Low fidelity wireframes include the most basic content and visuals.",
//         image: "",
//       },
//       // {
//       //   id: 4,
//       //   status: "To Do",
//       //   level: "low",
//       //   levelColor: "#D58D49",
//       //   levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
//       //   title: "Testing",
//       //   description:
//       //     "Find out whether your prototype meets users' expectations.",
//       //   image: "",
//       // },
//       // {
//       //   id: 5,
//       //   status: "In Progress",
//       //   level: "medium",
//       //   levelColor: "#8BC48A",
//       //   levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
//       //   title: "Design",
//       //   description: "The wireframe stage handles the look and feel.",
//       //   image: "",
//       // },
//     ],
//   },
// ];

// export default listCardState;

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      level: "low",
      levelColor: "#D58D49",
      levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
      status: "To Do",
      image: "",
    },
    "task-2": {
      id: "task-2",
      content: "Research",
      description:
        "User research helps you to create an optimal product for users.",
      level: "medium",
      levelColor: "#8BC48A",
      levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
      status: "In Progress",
      image: "",
    },
    "task-3": {
      id: "task-3",
      content: "Wireframes",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      level: "high",
      levelColor: "#5030E5",
      levelBackgroundColor: "rgba(80, 48, 229, 0.2)",
      status: "Done",
      image: "",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1"],
      lineColor: "#5030E5",
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-2"],
      lineColor: "#FFA500",
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-3"],
      lineColor: "#8BC48A",
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
