import { FC } from "react";
import { ToDoItemProps } from "../utils/interface";

const ToDoItem: FC<ToDoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex item-center justify-between p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-4"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}=
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
      >
        delete
      </button>
    </div>
  );
};

export default ToDoItem;
