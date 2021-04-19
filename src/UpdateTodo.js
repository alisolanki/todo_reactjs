import React, { useRef, useContext } from 'react';
import { TodoContext } from './TodoContext';


export default function UpdateTodo() {
    const todoNameRef = useRef();
    const [, setTodos] = useContext(TodoContext);
    var id = 1;

    function addTodo(e) {
        e.preventDefault();
        var todoName = todoNameRef.current.value;
        if (todoName === '') return
        setTodos(previousTodos => {
            return [...previousTodos, {
                id: id,
                name: todoName,
                complete: false,
            }];
        });
        todoNameRef.current.value = null;
        id++;
    }

    function clearAll() {
        setTodos(_ => { return [] });
    }

    return (
        <div>
            <span>
                <input type='text' ref={todoNameRef} />
                <button onClick={addTodo}>Submit</button>
                <button onClick={clearAll}>Clear all</button>
            </span>
        </div>
    )
}
