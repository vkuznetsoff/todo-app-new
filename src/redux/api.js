export const getComments = async () => {
  return [
    {
      id: "1",
      body: "1-1 First comment",
      username: "Jack",
      todoID: "1-1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "2-1 First comment",
      username: "John",
      todoID: "2-1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "1-1 First comment first child",
      username: "John",
      todoID: "1-1",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "2-1 First comment first child",
      username: "John",
      todoID: "2-1",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};
