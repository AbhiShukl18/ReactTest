import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './Action';
const Todo1 = () => {
    const[allTodos, setallTodos]=useState(0);             // initalizing allTodos as 0
    const[todo, Settodo]=useState("");                    //initalizing todo as null
    const todos= useSelector(state=> state.todos);         // making a instance of useSelector where state.todos is initial state of todo(null) into const variable named as todos
    const dispatch= useDispatch();                        // making a instace of useDispact function into const variable of dispatch

    const todoSubmit=()=>{

        if(todo!==""){                        // if todo list is empty then:-
        dispatch(add(allTodos, todo))         // dispatch function will call to add the entered todo in todo array
        setallTodos(allTodos+1);              // increase setallTodos by 1 to further check the count of element in todo array  
        Settodo("");                          // set Settodo as "" so that after entering the task it will remove the task from the input field and leaves it blank again
        
    }

    }

  return (
<>
    <div>
      <h1> ToDo List</h1>
      <input type="text" value={todo} onChange={(event)=>Settodo(event.target.value)} />   {/*Input field to enter the Task */}
    </div>

    <div>
        <p>
        <button onClick={todoSubmit}>Add Todo</button>                                          {/*on clicking the button todoSubmit function will call */}

            {
                todos?.map((todo, index)=>(                                   //to delete an an element from an array here we are using Map function where todos is coming from Line no 7(same file) and index is the indexing of resulted array

                <div key={index}>          {/**div key =0,1,2,3... so on */}
                                                         
                    {todo.task}                    {/* it is showing the task which is entered by the user where todo is cmoming from Line no 32(same file) and task is coming from Line no 6(action.js) */}
                    <button onClick={()=>dispatch(remove(index))}>Delete</button>    {/*while clicking on DELETE button where we are removing index of that particular element by using useDispatch where remove fnctn is coming from Line no 18(action.js) which return REMOVE type and which is called further in Line no 22(Reducer.js)*/}
                </div>
                ))
            }
        </p>
    </div>
    </>
  )
}

export default Todo1
