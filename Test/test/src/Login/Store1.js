import Reducer from './Reducer';
import authReducer  from './Reducer';
import { createStore } from 'redux';


// const Store1= createStore(Reducer(authReducer));                   // assigning Reducer into store variable which is coming from create store

const Store1 = createStore(Reducer);

export default Store1;
