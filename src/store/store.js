import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { postReducer } from "./postReducer";
import { usersListReducer } from "./usersListReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    dialogsPage: dialogsReducer,
    users: usersListReducer
});

const store = createStore(rootReducer);

export { store };