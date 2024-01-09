import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      dueDate,
      priority,
    };
    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
    setDueDate('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;