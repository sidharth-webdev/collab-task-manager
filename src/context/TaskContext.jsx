import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [logs, setLogs] = useState([]);

  const save = (data) => {
    setTasks(data);
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  const addTask = (task) => {
    save([...tasks, task]);
    setLogs([...logs, `Task created: ${task.title}`]);
  };

  const updateTask = (id, updates) => {
    save(tasks.map(t => t.id === id ? { ...t, ...updates } : t));
    setLogs([...logs, "Task updated"]);
  };

  const deleteTask = (id) => {
    save(tasks.filter(t => t.id !== id));
    setLogs([...logs, "Task deleted"]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, logs }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
