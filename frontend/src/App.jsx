import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/todos')
      .then((res) => res.json())
      .then((todos) => setTodos(todos))
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const handleNewTodoSubmit = (event) => {
    event.preventDefault()

    fetch('http://127.0.0.1:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todo: newTodo })
    })
      .then((res) => res.json())
      .then((todo) => {
        setTodos([...todos, todo])
        setNewTodo('')
      })
  }

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {/* 
          TODO 1: Show all todos on the screen using the Todo component 
          Hint: map
        */}
      </ul>

      <form onSubmit={handleNewTodoSubmit}>
        <label>
          New Todo:
          <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

export default App
