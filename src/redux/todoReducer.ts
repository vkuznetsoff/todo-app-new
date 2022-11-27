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

import { ActionProjectType, ADD_PROJECT } from "./actionsTypes";

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
    todos: [],
  },

  {
    id: "2",
    name: "Project 2",
    todos: [],
  },
];

const todoReducer = (state = initialState, action: ActionProjectType) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
