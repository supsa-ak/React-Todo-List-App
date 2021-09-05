import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, {useState} from 'react';

function App(){
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
const [todos, setTodos] = useState(
  [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "School",
      desc: "watch to school pics"
    },
    {
      sno: 3,
      title: "Mapping to get shit done",
      desc: "masking the defaults"
    }
  ]);
return (
  <>
    <Header title="My Todo List" searchBar={false} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
  </>
);
}

export default App;