import { createStore } from "redux";
import reducer from "./reducer";

// Initialize store
// Note: createStore() takes a function as a param
const store = createStore(reducer);

export default store;
