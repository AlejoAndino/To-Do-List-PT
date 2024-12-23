import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TaskInputProps {
  addTask: (text: string) => void;
}

const AddTaskForm: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className=''>
      {/* Botón para abrir el modal */}
      <motion.button
        initial={{ opacity: 0, y: -700}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1 }}
        onClick={() => setIsModalOpen(true)}
        className="p-3 bg-indigo-500 text-white rounded-md"
      >
        Agregar Tarea
      </motion.button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
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
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-gray-300 text-gray-700 rounded-md"
                >
                  Cancelar
                </button>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;