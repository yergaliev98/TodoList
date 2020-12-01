import React from "react";
import {useState,useEffect} from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos,setFilteredTodos] = useState([]);
  const [status, setStatus] = useState('all');

  //Use effects
  useEffect(() => {
    getLocalTodos();},
    []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [status,todos]);

  //filtered Todos
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((elem) => {
          return elem.completed === true;
        }))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((elem) => {
          return elem.completed === false;
        }))
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  //save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  //retrieve todos from local storage
  const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    if (todoLocal === null) {
       return setTodos([]);
    } else {
      return setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Beka's Todo List</h1>
      </header>
        <Form 
          setInputText={setInputText} 
          inputText={inputText} 
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
        />
        <Todo 
          todos={todos} 
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
    </div>
  );
} 

export default App;
