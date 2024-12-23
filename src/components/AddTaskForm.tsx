import React, { useState } from "react";
import { motion } from "framer-motion";
import AddTaskModal from "./modals/AddTaskModal"; // Importa el nuevo componente TaskModal

interface TaskInputProps {
  addTask: (text: string) => void;
}

const AddTaskForm: React.FC<TaskInputProps> = ({ addTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (taskText: string) => {
    addTask(taskText);
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <motion.button
        initial={{ opacity: 0, y: -700 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={() => setIsModalOpen(true)}
        className="p-2 md:p-3 bg-indigo-500 text-white w-14 h-14 sm:w-fit sm:h-fit rounded-full sm:rounded-md"
      >
        <span className="hidden sm:block">Agregar Tarea</span>
        <span className="block sm:hidden text-3xl">+</span>
      </motion.button>

      {/* Usar el componente TaskModal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default AddTaskForm;