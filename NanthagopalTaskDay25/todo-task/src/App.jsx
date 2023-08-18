import { useState } from 'react'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
  const [todoname, setTodoname]=useState("");
  const [list, setList]=useState(["fa","sa"]);

  const updateTodoname=(e)=>{
    setTodoname(e.target.value);
  }
  const addTodo=()=>{
    setList([...list, {
    name: todoname,
    completed: false
    }  
  ]);
    setTodoname("");
  };
  return (
    <div>
      <h3>My todo</h3>
      <input type="text" placeholder="Todo Name" value={todoname} onChange={updateTodoname}></input>
      <input type="text" placeholder="Todo Description"></input>
      <button onClick={addTodo}>AddTodo</button>
      {
        list.map(item=><todo obj={item}/>)
      }
   </div>
  )
}

export default App
