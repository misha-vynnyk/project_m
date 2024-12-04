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
      image: "",
    },
    "task-4": {
      id: "task-4",
      content: "Onboarding illustrations",
      description: "Help users understand how to use your service.",
      level: "low",
      levelColor: "#D58D49",
      levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
      image: "image/onboarding-illustration.png",
    },
    "task-5": {
      id: "task-5",
      content: "Moodboard",
      description: "The first impression is a crucial moment.",
      level: "low",
      levelColor: "#D58D49",
      levelBackgroundColor: "rgba(223, 168, 116, 0.2)",
      image: "image/moodboard-1.png",
    },
    "task-6": {
      id: "task-6",
      content: "Mobile App Design",
      description: "Make sure your mobile app looks great on all devices.",
      level: "completed",
      levelColor: "#8BC48A",
      levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
      image: "image/mobile-app-design.png",
    },
    "task-7": {
      id: "task-7",
      content: "Design system",
      description: "Create a robust pattern library and reusable components.",
      level: "completed",
      levelColor: "#8BC48A",
      levelBackgroundColor: "rgba(139, 196, 138, 0.2)",
      image: "",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3"],
      lineColor: "#5030E5",
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-4", "task-5"],
      lineColor: "#FFA500",
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-6", "task-7"],
      lineColor: "#8BC48A",
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
