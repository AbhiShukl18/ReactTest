import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, delet } from './Action';
const Todo1 = () => {
    const[counter, setCounter]=useState(0);
    const[todo, Settodo]=useState("");
    const todos= useSelector(state=> state.todos);
    const dispatch= useDispatch();

    const todoSubmit=()=>{

        if(todo!==""){
        dispatch(add(counter, todo))
        setCounter(counter+1);
        Settodo("");
    }

    }

  return (
<>
    <div>
      <h1> ToDo List</h1>
      <input type="text" value={todo} onChange={(event)=>Settodo(event.target.value)} />
    </div>
    <button onClick={todoSubmit}>Add Todo</button>

    <div>
        <p>
            {
                todos?.map((todo, index)=>(

                <div key={index}>
                    <p>{todo.task} </p>
                    <button onClick={()=>dispatch(delet(todo))}>Delete</button>
                </div>
                ))
            }
        </p>
    </div>
    </>
  )
}

export default Todo1
