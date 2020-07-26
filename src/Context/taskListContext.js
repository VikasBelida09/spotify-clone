import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
export const TaskListContext = createContext();
const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [editItem, setEditItem] = useState(null);
  const addTask = (title) => {
    setTasks([...tasks, { task: title, id: uuid() }]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const clearList = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { task: title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };
  const editCompleted = () => {
    if (completed <tasks.length) {
      setCompleted(completed + 1);
      console.log(completed,"done")
    }
  };
  const markAsNotCompleted = () => {
    if (completed > 0) {
      setCompleted(completed - 1);
      console.log(completed,"not done")

    }
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        editCompleted,
        markAsNotCompleted,
        completed
      }}
    >
      {props.children}
      {console.log(tasks)}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
