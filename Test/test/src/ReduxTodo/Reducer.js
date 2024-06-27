import { ADD, DELET } from "./Action"

const initialState={
    todos:[],
}

const Reducer=(state=initialState, action )=> {

    switch(action.type){

        case ADD:
            return {
                todos:[...state.todos,
                {
                    id: action.payload.id,
                    task:action.payload.task
                }
            ]
            };

            case DELET:
            return {
                todos:[...state.todos.filter(todo=>todo.id !== action.payload)]
            
            };
            default:
                return state;
    }
}



export default Reducer