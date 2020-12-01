export const TodoElem = ({text, todos, setTodos, todo}) => {
  const deleteBtnHandler = () => {
      setTodos(
        todos.filter((item) => {
          return item.id !== todo.id;
        })
      )
  }
  
  const completeBtnHandler = () => {
    setTodos(todos.map( item => {
      if (item.id === todo.id) {
        return {...item,completed:!item.completed};
      }
      return item;
     }
    ));
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
        <button  onClick={completeBtnHandler}className="completeBtn">
          <i className="fas fa-check-circle"></i>
        </button>
        <button className="deleteBtn" onClick={deleteBtnHandler}>
          <i className="far fa-trash-alt"></i> 
        </button>
    </div>
  );
}

export default TodoElem;