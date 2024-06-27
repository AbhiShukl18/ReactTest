import {createStore} from "redux";
import Reducer from "./Reducer";

const Store= createStore(Reducer);                   // assigning Reducer into store variable which is coming from create store

export default Store;