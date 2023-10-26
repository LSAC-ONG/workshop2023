# Backend Exercises

In real world, we use databases to store our data, but for this exercise we will use a simple array to store our todos.
```js
var todosArray = []
```

## Task 1

Implement the `GET /todos` endpoint, that sends all the todos to the client
<details>
    <summary>Hint</summary>
    Read about <a href="https://www.w3schools.com/whatis/whatis_json.asp">JSON</a>
</details>

## Task 2

Implement the `POST /todos` endpoint, that adds a new todo to the array.
This receives the todo in the request body, and adds it to the array.
The body looks like:
```json
{
    todo: "Eat Food"
}
```
<details>
    <summary>Hint</summary>
    Read about how to get data from the <a href="https://www.geeksforgeeks.org/express-js-req-body-property/">request body</a>
</details>

## Task 3

Implement the `DELETE /todos/:id` endpoint, that deletes a todo from the array.

## Task 4

Implement the `PATCH /todos/:id` endpoint, that updates a todo from the array.
This receives the updated todo in the request body, and updates it in the array.
The body looks like:
```json
{
    todo: "Stop eating junk food"
}
```

## Useful resources

- [Express Routes](https://expressjs.com/en/guide/routing.html)
- [Array Methods in JS](https://expressjs.com/en/guide/routing.html)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)