import React, { useContext } from 'react';
import { TodoContext } from '../providers/TodoProvider';
import Todo from './Todo';


export default function TodoList() {
    const [todos,] = useContext(TodoContext);
    return (
        todos.map(todo => {
            return <div key={todo.id}><Todo todo={todo} /></div>
        })
    );
}