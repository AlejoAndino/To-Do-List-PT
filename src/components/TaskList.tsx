import React from "react";
import { AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";
import { motion } from "framer-motion";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  timestamp: string;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string, completed: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="bg-indigo-200 p-4 md:p-8 rounded-lg shadow-lg">
      {tasks.length === 0 ? (
        <motion.p
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="text-center p-3 bg-white w-fit mx-auto rounded-xl text-gray-500"
        >
          No hay tareas.
        </motion.p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default TaskList;
