import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

const initialState = {
  tasks: [
    {
      id: 1,
      name: 'Complete Project Proposal',
      description: 'Write and submit the project proposal by Friday.',
      dueDate: '2024-01-15',
      priority: 'High',
    },
    // Add more tasks as needed
  ],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    // Add more cases for other actions (e.g., EDIT_TASK) as needed
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (newTask) => {
    dispatch({ type: 'ADD_TASK', payload: { id: state.tasks.length + 1, ...newTask } });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  // Add more functions for other actions (e.g., editTask) as needed

  return <TaskContext.Provider value={{ state, addTask, deleteTask }}>{children}</TaskContext.Provider>;
};