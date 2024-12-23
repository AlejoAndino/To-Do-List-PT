import React from "react";
import { FaTrash } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";

interface TaskItemProps {
  task: { id: string; text: string; completed: boolean, timestamp: string };
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <li className={`flex justify-between items-center p-3 rounded-md border-b ${task.completed ? 'bg-green-200' : 'bg-white'}`}>
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
        <button className="p-2 bg-slate-200 hover:text-black hover:bg-slate-300">
          <HiPencil />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
