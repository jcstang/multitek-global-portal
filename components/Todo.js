import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

export default function Todo({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodosContext);
  const handleToggleCompleted = () => {
    const changedFields = {
      ...todo.fields,
      iscomplete: !todo.fields.iscomplete,
    };
    const updatedTodo = { id: todo.id, fields: changedFields };
    updateTodo(updatedTodo);
  };

  return (
    <li className='bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4'>
      <input
        type='checkbox'
        name='completed'
        id='completed'
        checked={todo.fields.iscomplete}
        className='mr-2 form-checkbox h-5 w-5'
        onChange={handleToggleCompleted}
      />
      <p
        className={`flex-1 text-gray-800 ${
          todo.fields.iscomplete ? 'line-through' : ''
        }`}
      >
        {todo.fields.description}
      </p>
      <button
        type='button'
        className='text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded'
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
