import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import TaskEditModal from "./TaskEditModal";
import DeleteModal from "./modals/DeleteModal";
import { motion, AnimatePresence } from "framer-motion";

interface TaskItemProps {
  task: { id: string; text: string; completed: boolean; timestamp: string };
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string, completed: boolean) => void;
}

type ModalType = "edit" | "delete" | null; 

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
  editTask,
}) => {
  const [openModal, setOpenModal] = useState<ModalType>(null); 

  const handleOpenModal = (modalType: ModalType) => {
    setOpenModal(modalType); 
  };

  const handleCloseModal = () => {
    setOpenModal(null); 
  };

  const handleSaveTask = (id: string, text: string, completed: boolean) => {
    editTask(id, text, completed);
    handleCloseModal(); 
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    handleCloseModal(); 
  };
  
  return (
    <AnimatePresence>
      <motion.li
        key={task.id}
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
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
            onClick={() => handleOpenModal("delete")} 
            className="text-red-500 hover:text-red-700 hover:bg-slate-300 p-2 bg-slate-200"
          >
            <FaTrash />
          </button>
          <button
            onClick={() => handleOpenModal("edit")} 
            className="p-2 bg-slate-200 hover:text-black hover:bg-slate-300"
          >
            <HiPencil />
          </button>
        </div>

        {/* Modal para editar tarea */}
        {openModal === "edit" && (
          <TaskEditModal
            isOpen={true}
            task={task}
            onClose={handleCloseModal}
            onSave={handleSaveTask}
          />
        )}

        {/* Modal para confirmar eliminación */}
        {openModal === "delete" && (
          <DeleteModal
            isOpen={true}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
          />
        )}
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskItem;
