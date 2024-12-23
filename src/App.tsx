import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

type Task = {
  id: string;
  text: string;
  completed: boolean;
  timestamp: string;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  // Carga tareas
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setInitialized(true);
  }, []);

  // Guarda las tareas actualizandolo cuando las tareas cambian
  useEffect(() => {
    if (initialized) { 
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, initialized]);

  // Logica agregar tareas
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      timestamp: new Date().toLocaleString(), 
    };
    setTasks([...tasks, newTask]);
  };

  // Logica para marcar tareas
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Logica eliminar tareas
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Logica editar tareas
  const editTask = (id: string, text: string, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text, completed } : task
      )
    );
  };

  // Filtra las tareas
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-5xl text-indigo-500 p-10 font-semibold text-center mb-4">
        To-Do List
      </h1>
      <div className="w-full h-full max-w-3xl">
        <div className="flex flex-row-reverse justify-between py-4">
        <AddTaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        </div>
        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
};

export default App;
