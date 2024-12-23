import React from "react";
import { motion } from "framer-motion";

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <select
        className="p-3 border border-gray-300 rounded-md"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="incomplete">Incompletas</option>
      </select>
    </motion.div>
  );
};

export default TaskFilter;
