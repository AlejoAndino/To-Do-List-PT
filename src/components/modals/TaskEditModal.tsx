import React, { useState } from "react";
import { motion } from "framer-motion";

interface TaskEditModalProps {
  isOpen: boolean;
  task: { id: string; text: string; completed: boolean; timestamp: string };
  onClose: () => void;
  onSave: (id: string, text: string, completed: boolean) => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  isOpen,
  task,
  onClose,
  onSave,
}) => {
  const [text, setText] = useState(task.text);
  const [completed, setCompleted] = useState(task.completed);

  const handleSave = () => {
    onSave(task.id, text, completed);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg w-full max-w-md"
        >
          <h2 className="text-xl mb-4">Editar Tarea</h2>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="mr-2">Completada</label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Guardar
            </button>
          </div>
        </motion.div>
      </div>
    )
  );
};

export default TaskEditModal;
