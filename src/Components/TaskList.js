import React, { useContext } from "react";
import { TaskListContext } from "../Context/taskListContext";
import Task from "./Task";
const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className="scroll__tasks">
       {tasks.length ? (  <ul className="list">
        {tasks.map((item) => {
          return <Task key={item.id} title={item.task} id={item.id} />;
        })}
      </ul>):(
          <div className="no-tasks">
                No Tasks
          </div>
      )} 
    
    </div>
  );
};

export default TaskList;
