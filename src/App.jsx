import React, { useState } from 'react';
import Heading from './components/Heading';
import Form from './components/Form';
import Status from './components/Status';
import ListGroup from './components/ListGroup';
// import List from './components/List';
import { Toaster } from "react-hot-toast";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      job: "read js book",
      isDone: false,
    },
    {
      id: 2,
      job: "meet with client",
      isDone: true,
    },
    {
      id: 3,
      job: "prepare for interview",
      isDone: false,
    },
    {
      id: 4,
      job: "read react doc",
      isDone: false,
    },
  ]);

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const editTask = (newJob, id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-[400px] mx-auto mt-20">
      <Heading text="Todo App" />
      <Form addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup
        editTask={editTask}
        deleteTask={deleteTask}
        checkTask={checkTask}
        tasks={tasks}
      />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}

export default App;
