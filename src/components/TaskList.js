import React from 'react';
import Task from './Task';
import { useTaskContext } from '../context/TaskContext';
import '../App.css';

const TaskList = () => {
  const { state } = useTaskContext();

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {state.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;