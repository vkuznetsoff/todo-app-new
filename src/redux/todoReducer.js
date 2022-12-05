// interface ITodo {
//   id: Number;
//   title: String;
//   describe: String;
//   // dateCreate: String; //Change to Date Type******
//   // timeFromCreation: String;
//   // dateEnd: String;
//   // proirity: String;
//   // attachment: String;
//   status: String;
//   // isSubTodo: Boolean;
//   // comments: String;
// }

import {
  ActionProjectType,
  ADD_PROJECT,
  GET_TODOS,
  REMOVE_TODO,
} from "./actionsTypes";
import { ADD_TODO } from "./actionsTypes";
import { CHANGE_TODO_STATUS } from "./actionsTypes";

export const statuses = {
  QUEUE: "QUEUE",
  DEVELOPMENT: "DEVELOPMENT",
  DONE: "DONE",
};

export const priority = {
  HIGH: "HIGH",
  MEDIUM: "MEDIUM",
  LOW: "LOW",
};
// export interface IProject {
//   id: Number;
//   name: String;
//   todos: Array<ITodo>;
// }

// // export interface IInitialState extends Array<IProject> {}
// export type IInitialState = IProject[];

// const initialState = [
//   {
//     id: 1,
//     name: "Project 1",
//     todos: [
//       {
//         id: 11,
//         title: "Task1",
//         describe: "Task1",
//         // dateCreate: String; //Change to Date Type******
//         // timeFromCreation: String;
//         // dateEnd: String;
//         // proirity: String;
//         // attachment: String;
//         status: "active",
//         // isSubTodo: Boolean;
//         // comments: String;
//       },
//       {
//         id: 12,
//         title: "Task2",
//         describe: "Task2",
//         // dateCreate: String; //Change to Date Type******
//         // timeFromCreation: String;
//         // dateEnd: String;
//         // proirity: String;
//         // attachment: String;
//         status: "active",
//         // isSubTodo: Boolean;
//         // comments: String;
//       },
//     ],
//   },

//   {
//     id: 2,
//     name: "Project 2",
//     todos: [
//       {
//         id: 21,
//         title: "Task21",
//         describe: "Task21",
//         // dateCreate: String; //Change to Date Type******
//         // timeFromCreation: String;
//         // dateEnd: String;
//         // proirity: String;
//         // attachment: String;
//         status: "active",
//         // isSubTodo: Boolean;
//         // comments: String;
//       },
//       {
//         id: 22,
//         title: "Task22",
//         describe: "Task22",
//         // dateCreate: String; //Change to Date Type******
//         // timeFromCreation: String;
//         // dateEnd: String;
//         // proirity: String;
//         // attachment: String;
//         status: "active",
//         // isSubTodo: Boolean;
//         // comments: String;
//       },
//     ],
//   },
// ];
const initialState = [
  {
    id: "1",
    name: "Project 1",
    todos: [
      {
        id: "1-1",
        title: "Todo 1-1",
        status: statuses.QUEUE,
        number: "",
        text: "",
        createdAt: "2022-12-03",
        timeInProgress: "",
        doneAt: "",
        priority: priority.HIGH,
        attachments: "",
        subtodos: [],
        done: false,
      },
      {
        id: "1-2",
        title: "Todo 1-2",
        status: statuses.QUEUE,
        number: "",
        text: "",
        createdAt: "2022-12-03",
        timeInProgress: "",
        doneAt: "",
        priority: priority.HIGH,
        attachments: "",
        subtodos: [],
        done: false,
      },
    ],
  },

  {
    id: "2",
    name: "Project 2",
    todos: [
      {
        id: "2-1",
        title: "Todo 2-1",
        status: statuses.DEVELOPMENT,
        number: "",
        text: "",
        createdAt: "2022-12-03",
        timeInProgress: "",
        doneAt: "",
        priority: priority.HIGH,
        attachments: "",
        subtodos: [],
        done: false,
      },
      {
        id: "2-2",
        title: "Todo 2-2",
        status: statuses.DONE,
        number: "",
        text: "",
        createdAt: "2022-12-03",
        timeInProgress: "",
        doneAt: "",
        priority: priority.HIGH,
        attachments: "",
        subtodos: [],
        done: false,
      },
    ],
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload];

    case ADD_TODO:
      debugger;
      return state.map((project) => {
        if (project.id === action.payload.projectID) {
          return {
            ...project,
            todos: [...project.todos, action.payload.newTodo],
          };
        } else return project;
      });

    case GET_TODOS:
      return [...state.filter((s) => s.id === String(action.payload))];

    case CHANGE_TODO_STATUS:
      const { projectID, todo, newStatus } = action.payload;
      return state.map((pr) => {
        if (pr.id === projectID) {
          return {
            ...pr,
            todos: [
              ...pr.todos.filter((t) => t.id !== todo.id),
              { ...todo, status: newStatus },
            ],
          };
        } else return pr;
      });

    case REMOVE_TODO:
      const { todoID, projectFROM } = action.payload;
      return state.map((p) => {
        if (p.id === projectFROM) {
          return { ...p, items: p.items.filter((i) => i.id !== todoID) };
        } else return p;
      });

    // case ADD_TODO:
    //   return state.map((b) => {
    //     if (b.id === action.payload.boardId) {
    //       return {
    //         ...b,
    //         items: [...b.items, { id: uniqid(), text: action.payload.text }],
    //       };
    //     } else return b;
    //   });

    // case REMOVE_TODO:
    //   return state.map(pr => (
    //     if (pr.id ===action.payload) {

    //     }
    //   ))

    default:
      return state;
  }
};

export default todoReducer;
