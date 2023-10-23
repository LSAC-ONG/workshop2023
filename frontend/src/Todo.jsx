import React from 'react';
import './Todo.css';

function Todo(props) {
	const handleDelete = () => {
		// Completat cu URL-ul corect catre backend
		fetch(`http://127.0.0.1:3000/todos/${props.todo.todo}`, {
			method: 'DELETE',
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to delete todo');
				}
			})
			.catch(error => {
				console.error(error);
			})
			.then(() => window.location.reload());
	};

	return (
		<div className="todo-item">
			{/* Completat cu text in paragraf */}
			<p>{props.todo.todo}</p>
			{/* Apelat functia de delete */}
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default Todo;
