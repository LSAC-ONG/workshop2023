import React from 'react';
import './Todo.css';

const BACKEND_URL = 'http://127.0.0.1:3000'

function Todo(props) {
	const handleDelete = () => {
		/*
			TODO 2: Complete the URL to delete the todo 
		*/
		fetch(`${BACKEND_URL}`, {
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
			{/* 
				TODO 3: Display the todo text in a paragraph 
			*/}
			{/* 
				TODO 4: Add the onClick event handler to the button
			*/}
			<button onClick={() => {}}>Delete</button>
		</div>
	);
}

export default Todo;
