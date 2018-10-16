const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

let todo = [];
let remove = [];
let note = [];
let removeNote = [];


app.get('/', (req,res) => {
  res.render('index', {todo: todo, note: note});

})

app.post('/addtodo', (req,res) => {

  let newTodo = req.body.newtodo;
  todo.push(newTodo);
  res.redirect('/');
})

app.post('/addnote', (req,res) => {
  let newNote = req.body.newnote;
  console.log(newNote);
  note.push(newNote);
  res.redirect('/');
  console.log(note);

})

app.post('/removenote', (req,res) => {
  const removeNote1 = req.body.check;
  if(typeof  removeNote1 === "string"){
    removeNote.push(removeNote1);
    note.splice(note.indexOf(removeNote1), 1);
  } else if (typeof removeNote1 === "object") {
    for(let i = 0; i < removeNote1.length; i++){
      removeNote.push(removeNote1[i]);
      note.splice(note.indexOf(removeNote1[i]), 1);
    }
  }
  res.redirect('/');
});


app.post('/remove', (req,res) => {
  const removeTodo = req.body.check;

  if(typeof  removeTodo === "string"){
    remove.push(removeTodo);
    todo.splice(todo.indexOf(removeTodo), 1);
  } else if (typeof removeTodo === "object") {
    for(let i = 0; i < removeTodo.length; i++){
      remove.push(removeTodo[i]);
      todo.splice(todo.indexOf(removeTodo[i]), 1);
    }
  }
  res.redirect('/');
});



app.listen(port, () => console.log(`Running on port ${port}`));
