import React from "react";
import "./App.css";
import TaskList from "./Components/TaskList";
import TaskListContextProvider from "./Context/taskListContext";
import TaskForm from "./Components/TaskForm";
import Header from "./Components/Header";
import ShowProgress from "./Components/ShowProgress";
const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <ShowProgress/>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
