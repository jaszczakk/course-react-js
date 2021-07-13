import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 5; //id od którego będziemy liczyć id w metodzie addTask
  state = {
    tasks: [
      {
        id: 0,
        text: "Podpisać umowę u notariusza",
        date: "2021-05-07",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Wybrać suknię ślubną",
        date: "2021-05-30",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Znaleźć atrakcje na wesele",
        date: "2021-07-01",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Wybrać dodatki do nowego domu",
        date: "2021-09-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Zadzwonić do urzędu stanu cywilnego",
        date: "2021-05-25",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, //tekst z inputa
      date: date, //tekst z inputa
      important: important, //checked z inputa
      active: true,
      finishDate: null,
    };
    this.counter++;
    //pracujemy na starym state więc prevState używamy (chcemy dodać do starej tablicy nowy obiekt i stworzyć nową (kopię ) tablicy)
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task], //stworzylismy nową tablicę, która sklada sie z wszystkich elementów do tej pory i dodatkowo z nowego taska na końcu
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
