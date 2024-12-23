import React from "react";

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <select
        className="p-3 border border-gray-300 rounded-md"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="incomplete">Incompletas</option>
      </select>
    </div>
  );
};

export default TaskFilter;