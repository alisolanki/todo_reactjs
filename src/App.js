import React from 'react';
import TodoList from './components/TodoList';
import { TodoProvider } from './providers/TodoProvider';
import UpdateTodo from './services/UpdateTodo';

import './App.css';

export default function App() {
  return (
    <TodoProvider>
      <div id='title'>
        <h1>Todo list</h1>
      </div>
      <UpdateTodo />
      <TodoList />
    </TodoProvider >
  );
}
