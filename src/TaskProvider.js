import * as React from 'react';
import { doneTasksReducer } from "./App2";
import { allTasksReducer } from "./App2";
import { allTasks } from "./App2";
export const TasksContext = React.createContext({});
export const ACTIONS = {
    ADDTODO: 'addToDo',
    TOGGLETODO: 'toggleToDo',
    DELETE: 'deleteTask',
    REMOVEALL: "removeAll",
    FILTERDONE: "filterDone",
    SHOWALLTASKS: "showAllTasks"
};


export default function TasksProvider(props) {
    const initialState = { doneTodos: allTasks, allTodos: allTasks };
    const [state, dispatch] = React.useReducer(combineReducers({
        doneTodos: doneTasksReducer,
        allTodos: allTasksReducer,
    }), initialState);
    // const [state, dispatch] = React.useReducer(doneTasksReducer, initialState)
    return (
        <TasksContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</TasksContext.Provider>
    )
}
///REDUCER////


function combineReducers(reducers) {
    return (state = {}, action) => {
        const newState = {};
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    }
}