import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  totalTasks: number;
  completedTasks: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalTasks,
  completedTasks,
}) => {
  const completionRate =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0}}
      animate={{ opacity: 1, y: 0, scale: 1}}
      transition={{ duration: 1.5 }}
      className="relative bottom-20 right-12 sm:top-0 sm:right-2 flex flex-col items-center w-fit p-4 bg-white shadow-md rounded-full"
    >
      <div className="relative w-32 h-32">
        {/* Progreso */}
        <div
          className="absolute inset-0 rounded-full bg-gray-200"
          style={{
            background: `conic-gradient(#6366f1 ${completionRate}%, #e5e7eb ${completionRate}% 100%)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-white rounded-full m-2"></div>
        {/* Texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-indigo-500 mt-4">
            {Math.round(completionRate)}%
          </span>
          <p className="text-sm text-gray-500">
            {completedTasks} / {totalTasks}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
