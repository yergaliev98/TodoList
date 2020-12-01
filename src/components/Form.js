import React from "react";

const Form = ( {setInputText, setTodos, inputText, todos, setStatus} ) => {
  //input Handler
 const inputTextHandler = (e) => {
    setInputText(e.target.value);
 }

 //submitHandler
 const submitBtnHandler = (e) => {
    e.preventDefault();
    setTodos([...todos,{ text:inputText, id:Math.random() * 10, completed:false }]);
    setInputText('');
 }

 const statusHandler = (e) => {
   setStatus(e.target.value);
 }

  return (
    <form>
      <input
        value={inputText} 
        onChange={inputTextHandler} 
        className="todo-input" 
        type="text"
      />

      <button 
        onClick={submitBtnHandler} 
        type="submit" 
        className="todo-button"
      >
         <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select 
          name="todos" 
          className="todo-filter"
          onChange={statusHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
} 

export default Form;