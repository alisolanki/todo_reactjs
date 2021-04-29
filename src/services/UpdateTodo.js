import { Button, TextField } from '@material-ui/core';
import React, { useRef, useContext } from 'react';
import { TodoContext } from '../providers/TodoProvider';


export default function UpdateTodo() {
    const todoNameRef = useRef();
    const [todos, setTodos] = useContext(TodoContext);

    function addTodo(e) {
        e.preventDefault();
        var todoName = todoNameRef.current.value;
        if (todoName === '') return
        setTodos(previousTodos => {
            return [...previousTodos, {
                id: todos.length,
                name: todoName,
                complete: false,
            }];
        });
        todoNameRef.current.value = null;
    }

    function clearAll() {
        setTodos(_ => { return [] });
    }

    return (
        <div className='updateTodo'>
            <TextField label='Todo Name'
                color='primary' variant='outlined'
                size='small' inputRef={todoNameRef}/>
            <span className='updateTodo-button'>
                <Button color='primary' variant='contained'
                    size='small' onClick={addTodo}>
                    Submit
                </Button>
            </span>
            <span className='updateTodo-button'>
                <Button color='secondary' variant='contained'
                    size='small' onClick={clearAll}>
                    Clear All
                </Button>
            </span>
        </div>
    )
}
