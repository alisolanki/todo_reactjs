import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export default function Todo({ todo }) {
    const [todos, setTodos] = useContext(TodoContext);
    function toggleTodo() {
        const newTodos = [...todos];
        const todoVal = newTodos.find(todoVal => todoVal.id === todo.id);
        todoVal.complete = !todoVal.complete;
        setTodos(prevTodos => {
            return [...newTodos];
        });
        console.log(todos);
    }

    return (
        <div>
            <h1>{todo.name}</h1>
            <input type='checkbox' onClick={toggleTodo} />
        </div>
    )
}
