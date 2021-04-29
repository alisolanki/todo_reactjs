import React, { useContext } from 'react';
import { TodoContext } from '../providers/TodoProvider';
import Checkbox from '@material-ui/core/Checkbox';

export default function Todo({ todo }) {
    const [todos, setTodos] = useContext(TodoContext);
    function toggleTodo() {
        setTodos(prevTodos => {
        let li = [];
        prevTodos.forEach(
            (prevTodo)=>{
                if(prevTodo.id === todo.id){
                    prevTodo.complete = !prevTodo.complete;
                }
                li.push(prevTodo);
            }
        );
        return [...li];
        });
        console.log(todos);
    }

    return (
        <div className="todo-component">
            <h2>{todo.name}</h2>
            <Checkbox key={todo.id}
            checked={todo.complete}
            onChange={toggleTodo}
            size='small' color='secondary'/>
        </div>
    )
}
