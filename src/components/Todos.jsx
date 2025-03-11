import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">📋 My Todos</h2>
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-300"
            >
              <span className="text-gray-700 font-medium">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-all duration-300"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 italic">No todos found. Add some tasks!</p>
      )}
    </div>
  );
};

export default Todos;
