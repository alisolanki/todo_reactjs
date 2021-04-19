import React from 'react';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import UpdateTodo from './UpdateTodo';

export default function App() {
  return (
    <TodoProvider>
      <div id='title'>
        <h1>Todo List</h1>
      </div>
      <UpdateTodo />
      <TodoList />
    </TodoProvider >
  );
}
