import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from './task/task.reducer';
import popupReducer from './popup/popup.reducer';

const rootReducer = combineReducers({
 todos: todoReducer,
 popup: popupReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
