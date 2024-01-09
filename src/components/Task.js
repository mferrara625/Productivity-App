import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../App.css';

const Task = ({ task }) => {
  const { deleteTask } = useTaskContext();

  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;