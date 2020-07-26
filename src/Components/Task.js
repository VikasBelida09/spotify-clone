import React, { useContext, useState } from "react";
import { TaskListContext } from "../Context/taskListContext";
const Task = ({ title, id }) => {
  const {
    removeTask,
    findItem,
    markAsNotCompleted,
    editCompleted,
  } = useContext(TaskListContext);
  const [checked, setchecked] = useState(false);
  const handleCheck = (e) => {
    setchecked(!checked);
    if (e.target.checked) {
      editCompleted();
    } else {
      markAsNotCompleted();
    }
  };
  return (
    <div>
      <li className="list-item">
        <div className="checkGroup">
          <input
            type="checkbox"
            className="list-item__checkList"
            onChange={handleCheck}
          />
          <span className={checked ? `task__title__underline` : `task__title`}>
            {title}
          </span>
        </div>
        <div>
          <button
            className="btn-delete task-btn"
            onClick={() => removeTask(id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>{" "}
          <button className="btn-edit task-btn" onClick={() => findItem(id)}>
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
