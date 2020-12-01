import React from "react";
import TodoElem from "./TodoElem";
const Todo = ({todos, setTodos,filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        { filteredTodos.map((todo) => {
          return <TodoElem 
            text={todo.text} 
            key={todo.id} 
            todos={todos} 
            setTodos={setTodos}
            todo={todo}
           />
        })
        }
      </ul>
    </div>
  ); 
}

export default Todo;