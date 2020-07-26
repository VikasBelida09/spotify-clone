import React, { useContext } from "react";
import { TaskListContext } from "../Context/taskListContext";

const ShowProgress = () => {
  const { tasks, completed } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length && completed !== tasks.length ? (
        <span className="progress__text">
          Tasks Completed -{` ${completed}/${tasks.length}`}
        </span>
      ) : null}
      {completed === tasks.length && completed !== 0 ? (
        <span className="completed__text">
          Hurray!!! you have completed all the tasks <span>🥇🎉</span>
        </span>
      ) : null}
    </div>
  );
};

export default ShowProgress;
