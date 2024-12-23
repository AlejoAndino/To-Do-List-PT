import React, { FC } from "react";
import { motion } from "framer-motion";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (text: string) => void;
}

const AddTaskModal: FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [taskText, setTaskText] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="p-4 fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-md p-6 rounded-md shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Nueva Tarea</h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Escribe tu tarea"
              className="p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="p-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-md"
              >
                Agregar
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    )
  );
};

export default AddTaskModal;