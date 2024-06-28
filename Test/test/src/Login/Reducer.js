import { LOGIN, LOGOUT } from "./Action1"


const initialState = {

  user: null,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  