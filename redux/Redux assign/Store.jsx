import { createStore } from "redux";
import rootreducer from "./reducer";


const Store = createStore(rootreducer)

export default Store