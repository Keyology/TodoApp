const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

let todo = [];
let remove = [];


app.get('/', (req,res) => {
  res.render('index', {todo: todo});
})

app.post('/addtodo', (req,res) => {

  let newTodo = req.body.newtodo;
  todo.push(newTodo);
  res.redirect('/');
})

app.post('/remove', (req,res) => {
  const removeTodo = req.body.check;

  if(typeof  removeTodo === "string"){
    remove.push(removeTodo);
    todo.splice(todo.indexOf(removeTodo), 1);
  } else if (typeof removeTodo === "object") {
    for(let i = o; i < removeTodo.length; i++){
      remove.push(removeTodo[i]);
      todo.splice(task.indexOf(removeTask[i]), 1);
    }
  }
  res.redirect('/');
});


app.listen(port, () => console.log(`Running on port ${port}`));
