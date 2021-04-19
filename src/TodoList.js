import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Todo from './Todo';


export default function TodoList() {
    const [todos,] = useContext(TodoContext);
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
        })
    );
}