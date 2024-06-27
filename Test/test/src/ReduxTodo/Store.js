import {createStore} from "redux";
import Reducer from "./Reducer";

const Store= createStore(Reducer);                   // assigning counterreducer into store variable which is cmoing from create store

export default Store;