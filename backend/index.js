express = require("express");
bodyParser = require("body-parser");
cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// In real life, this would be stored in a database.
var todosArray = [];

app.get("/todos", (req, res) => {
  // TODO 1: Send all todos to frontend.

  res.status(200).json(todosArray);
});

app.post("/todos", (req, res) => {
  // TODO 2: Add new todo to todosArray.

  const todo = req.body;

  todosArray.push(todo);

  res.status(201).json(todo);
});

app.delete("/todos/:text", (req, res) => {
  // TODO 3: Delete todo from todosArray.

  const text = req.params.text;

  todosArray = todosArray.filter((item) => item.todo !== text);

  res.status(204).send();
});

app.patch("/todos/:text", (req, res) => {
  // TODO 4: Update todo in todosArray.

  const text = req.params.text;
  const todo = req.body;

  todosArray = todosArray.map((item) => {
    if (item.todo === text) {
      return todo;
    } else {
      return item;
    }
  });

  res.status(200).json(todo);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
