export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

const addRate = ({ author, comment, rate }) => ({
  type: ADD,
  payload: {
    author,
    comment,
    rate,
    id: Math.floor(Math.random * 1000),
  },
});

const deleteRate = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});

const editRate = ({ author, comment, rate, id }) => ({
  type: EDIT,
  payload: {
    author,
    comment,
    rate,
    id,
  },
});
