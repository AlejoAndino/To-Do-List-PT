import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className='bg-indigo-200 p-8 rounded-lg shadow-lg'>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;