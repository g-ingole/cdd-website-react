import { createStore } from "redux";
import rootred from "./redux/reducer/Main";

const store = createStore(
    rootred
);

export default store;