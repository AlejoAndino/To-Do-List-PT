import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import TaskEditModal from "./TaskEditModal"; 

interface TaskItemProps {
  task: { id: string; text: string; completed: boolean; timestamp: string };
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string, completed: boolean) => void; 
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
  editTask,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  const handleSaveTask = (id: string, text: string, completed: boolean) => {
    editTask(id, text, completed); 
  };

  return (
    <li
      className={`flex justify-between items-center p-3 rounded-md border-b ${
        task.completed ? "bg-green-200" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-2 w-6 h-6"
        />
        <div>
          <p className={task.completed ? "line-through text-gray-500" : ""}>
            {task.text}
          </p>
          <p className="text-xs">{task.timestamp}</p>
        </div>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700 hover:bg-slate-300 p-2 bg-slate-200"
        >
          <FaTrash />
        </button>
        <button
          onClick={handleEditClick}
          className="p-2 bg-slate-200 hover:text-black hover:bg-slate-300"
        >
          <HiPencil />
        </button>
      </div>

      {/* Modal para editar tarea */}
      <TaskEditModal
        isOpen={isModalOpen}
        task={task}
        onClose={handleModalClose}
        onSave={handleSaveTask}
      />
    </li>
  );
};

export default TaskItem;