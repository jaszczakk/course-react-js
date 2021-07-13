import { useEffect, useReducer } from "react";
import "./App.css";
import CourseInfo from "./CourseInfo";
import Form from "./Form";

const samurajProgramowaniaCourses = [
  { id: "1", title: "aaaaa" },
  { id: "2", title: "bbbbb" },
  { id: "3", title: "ccccc" },
  { id: "4", title: "ddddd" },
  { id: "5", title: "eeeee" },
];
const coursesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.course];
    case "REMOVE":
      return state.filter((course) => course.id !== action.id);
    case "FETCH":
      return action.data;
    default:
      throw new Error("Ooops somthing went wrong!");
  }
};

const fetchAsyncData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

const App = () => {
  const [state, dispatch] = useReducer(coursesReducer, []);

  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: "FETCH", data: samurajProgramowaniaCourses });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const coursesElement = state.map((course) => (
    <CourseInfo key={course.id} onClickHandler={dispatch} {...course} />
  ));
  return (
    <>
      <div>{coursesElement}</div>
      <Form onClickAdd={dispatch} />
    </>
  );
};

export default App;
