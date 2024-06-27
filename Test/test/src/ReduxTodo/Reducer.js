import { act } from "react";
import { ADD, REMOVE } from "./Action"

const initialState={
    todos:[],                  
}

const Reducer=(state=initialState, action )=> {

    switch(action.type){

        case ADD:                                  // when case type ADD calls then it returns:-
            return {
                todos:[...state.todos,             // its previous state if any(by using spread operator)and, 
                {
                    id: action.payload.id,          // id which is indexing 
                    task:action.payload.task        // task which is entered by user
                }
            ]
            };

            case REMOVE:                            // when case type REMOVE is called then:- 
                const newTodos=[...state.todos]       // we are making instance of previous state in to new variable named as newTodos
                newTodos.splice(action.payload,1);     // then by using splice method we are removing that element which we are selcting by using DELETE button
            return {                                    // and returing:-
                ...state,                                  // previous states (if any)
                todos:newTodos,                             // and resulted array after rmoving unwanted element of that array
                
            };
            default:
                return state;
    }
}



export default Reducer