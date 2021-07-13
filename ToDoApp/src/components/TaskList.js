import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  //zawsze porównywane są dwa parametry i zwracana zawsze jest wartość liczbowa: 0, >0, <0 i w zalezności od tego
  //indeks 'a' może być większy od 'b' więc 'a' idzie dalej i na odwrót
  //ta metoda zwrca zawsze wartosc liczbowa ktora oznacza indeks elementu a i b ktore są porównywane! indeksy tablicy w ktorej znajduja się dane elementy
  //alfabet też jest tablicą, a literki mają swoje indeksy i np. "m" < "z" to jest true i oznacza że "m" ma mniejszy indeks
  //   done.sort((a, b) => {
  //     return b.finishDate - a.finishDate;
  //   });

  //inny sposób  , jesli tab ma więcej niz 2 elementy bo inaczej nie ma sensu sortowanie
  //sortowanie po dacie
  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>BRAK ZADAŃ</p>}
      </div>
      <hr />

      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: "10px" }}>
            Wyświetlonych jest jedynie 5 ostatnich elementów
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
