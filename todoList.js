

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import * as _ from "lodash";

const initialTasks = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Finish project", completed: false },
  { id: 3, task: "Workout", completed: false },
  { id: 4, task: "Read a book", completed: false },
  { id: 5, task: "Call mom", completed: false },
  { id: 6, task: "Clean the house", completed: false },
  { id: 7, task: "Plan weekend trip", completed: false }
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.task}
            </span>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<TodoList />);
} else {
  console.error("Root element not found. Make sure your HTML file has a div with id='root'.");
}
