// /// Code works 08.06.21r. 
// import * as React from 'react';
// import { useHistory } from "react-router-dom";
// export const TasksContext = React.createContext({});
// function TaskInput({ todo, dispatch }) {
//     const history = useHistory();
//     return (
//         <div>
//             <span onClick={() => {
//                 history.push(`/test/${todo.id}/${todo.name}`)
//             }}>
//                 {todo.name}
//             </span>
//             <input
//                 type="checkbox"
//                 checked={todo.complete}
//                 onChange={(e) => e.target.checked}
//                 onClick={() => dispatch({
//                     type: ACTIONS.TOGGLETODO,
//                     payload: { id: todo.id }
//                 })}>
//             </input>
//             <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
//         </div>
//     );
// }
// const ACTIONS = {
//     ADDTODO: 'addToDo',
//     TOGGLETODO: 'toggleToDo',
//     DELETE: 'deleteTask',
//     REMOVEALL: "removeAll",
//     FILTERDONE: "filterDone",
//     SHOWALLTASKS: "showAllTasks"
// };
// ///REDUCER////
// function doneTasksReducer(allTodos, action) {
//     switch (action.type) {
//         case ACTIONS.ADDTODO:
//             allTodos = [...allTodos, newTodo(action.payload.name)];
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.TOGGLETODO:
//             allTodos = allTodos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return { ...todo, complete: !todo.complete };
//                 }
//                 return todo;
//             })
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.DELETE:
//             allTodos = allTodos.filter(todo =>
//                 todo.id !== action.payload.id)
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.REMOVEALL:
//             allTasks = [];
//             return [];
//         case ACTIONS.FILTERDONE:
//             allTodos = allTodos.filter(todo => todo.complete === true);
//             showAllTasks(allTodos)
//             return (allTodos);
//         case ACTIONS.SHOWALLTASKS:
//             console.log(allTasks);
//             return allTasks;
//         default:
//             return allTodos;
//     }
// }
// function allTasksReducer(allTodos, action) {
//     switch (action.type) {
//         case ACTIONS.ADDTODO:
//             allTodos = [...allTodos, newTodo(action.payload.name)];
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.TOGGLETODO:
//             allTodos = allTodos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return { ...todo, complete: !todo.complete };
//                 }
//                 return todo;
//             })
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.DELETE:
//             allTodos = allTodos.filter(todo =>
//                 todo.id !== action.payload.id)
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.REMOVEALL:
//             allTasks = [];
//             return [];
//         case ACTIONS.FILTERDONE:
//             let list = showAllTasks(allTodos)
//             return (list, allTodos)
//         default:
//             return allTodos;
//     }
// }
// let allTasks = [];
// function showAllTasks(tasks) {
//     allTasks = tasks
//     return allTasks
// };
// function newTodo(name) {
//     return { id: Date.now(), name: name, complete: false, key: Date.now() };
// }
// function combineReducers(reducers) {
//     return (state = {}, action) => {
//         const newState = {};
//         for (let key in reducers) {
//             newState[key] = reducers[key](state[key], action);
//         }
//         return newState;
//     }
// }
// function TasksProvider(props) {
//     const initialState = { doneTodos: allTasks, allTodos: allTasks };
//     const [state, dispatch] = React.useReducer(combineReducers({
//         doneTodos: doneTasksReducer,
//         allTodos: allTasksReducer,
//     }), initialState)
//     // const [state, dispatch] = React.useReducer(doneTasksReducer, initialState)
//     return (
//         <TasksContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</TasksContext.Provider>
//     )
// }

// function List() {
//     const history = useHistory();
//     // const initialState = { doneTodos: allTasks, allTodos: allTasks };
//     // const [state, dispatch] = React.useReducer(combineReducers({
//     //     doneTodos: doneTasksReducer,
//     //     allTodos: allTasksReducer,
//     // }), initialState)
//     const { state, dispatch } = React.useContext(TasksContext);
//     const [name, setName] = React.useState('');
//     const { doneTodos } = state;
//     function handleSubmit(e) {
//         e.preventDefault();
//         dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
//         setName("");
//     }

//     const handleToLogin = () => {

//         history.replace("/login");
//         // return props.setIsLogged(false);
//     }
//     // const history = useHistory();
//     // if (props.isLogged === false) {
//     //     history.replace("/login");
//     // }
//     return (

//         <div>
//             <div>
//                 <button
//                     onClick={handleToLogin}
//                 >
//                     To loggin Page
//         </button>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={name} onChange={e => {
//                     setName(e.target.value);
//                 }} />
//             </form>
//             <button onClick={() => dispatch({ type: ACTIONS.REMOVEALL })}>Remove all</button>
//             <button onClick={() => dispatch({ type: ACTIONS.FILTERDONE })}> ShowDone </button>
//             <button onClick={() => dispatch({ type: ACTIONS.SHOWALLTASKS })}> ShowAllTasks </button>
//             {doneTodos.map((todo) => {
//                 return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />
//             })}
//         </div>


//     )
// }
// export default function App(props) {
//     return (
//         <TasksProvider>
//             <List />
//         </TasksProvider>
//     )
// }






///with task provider in index not in app2.js










// export const TasksContext = React.createContext({});

// const ACTIONS = {
//     ADDTODO: 'addToDo',
//     TOGGLETODO: 'toggleToDo',
//     DELETE: 'deleteTask',
//     REMOVEALL: "removeAll",
//     FILTERDONE: "filterDone",
//     SHOWALLTASKS: "showAllTasks"
// };
// ///REDUCER////
// function doneTasksReducer(allTodos, action) {
//     switch (action.type) {
//         case ACTIONS.ADDTODO:
//             allTodos = [...allTodos, newTodo(action.payload.name)];
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.TOGGLETODO:
//             allTodos = allTodos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return { ...todo, complete: !todo.complete };
//                 }
//                 return todo;
//             })
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.DELETE:
//             allTodos = allTodos.filter(todo =>
//                 todo.id !== action.payload.id)
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.REMOVEALL:
//             allTasks = [];
//             return [];
//         case ACTIONS.FILTERDONE:
//             allTodos = allTodos.filter(todo => todo.complete === true);
//             showAllTasks(allTodos)
//             return (allTodos);
//         case ACTIONS.SHOWALLTASKS:
//             console.log(allTasks);
//             return allTasks;
//         default:
//             return allTodos;
//     }
// }
// function allTasksReducer(allTodos, action) {
//     switch (action.type) {
//         case ACTIONS.ADDTODO:
//             allTodos = [...allTodos, newTodo(action.payload.name)];
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.TOGGLETODO:
//             allTodos = allTodos.map(todo => {
//                 if (todo.id === action.payload.id) {
//                     return { ...todo, complete: !todo.complete };
//                 }
//                 return todo;
//             })
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.DELETE:
//             allTodos = allTodos.filter(todo =>
//                 todo.id !== action.payload.id)
//             showAllTasks(allTodos)
//             return allTodos;
//         case ACTIONS.REMOVEALL:
//             allTasks = [];
//             return [];
//         case ACTIONS.FILTERDONE:
//             let list = showAllTasks(allTodos)
//             return (list, allTodos)
//         default:
//             return allTodos;
//     }
// }
// let allTasks = [];
// function showAllTasks(tasks) {
//     allTasks = tasks
//     return allTasks
// };
// function newTodo(name) {
//     return { id: Date.now(), name: name, complete: false, key: Date.now() };
// }
// function combineReducers(reducers) {
//     return (state = {}, action) => {
//         const newState = {};
//         for (let key in reducers) {
//             newState[key] = reducers[key](state[key], action);
//         }
//         return newState;
//     }
// }
// function TasksProvider(props) {
//     const initialState = { doneTodos: allTasks, allTodos: allTasks };
//     const [state, dispatch] = React.useReducer(combineReducers({
//         doneTodos: doneTasksReducer,
//         allTodos: allTasksReducer,
//     }), initialState)
//     // const [state, dispatch] = React.useReducer(doneTasksReducer, initialState)
//     return (
//         <TasksContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</TasksContext.Provider>
//     )
// }
import * as React from 'react';
import { useHistory } from "react-router-dom";
import { TasksContext } from "./TaskProvider";
import { ACTIONS } from "./TaskProvider";
// import { TaskInput } from "./TaskProvider";
function TaskInput({ todo, dispatch }) {
    const history = useHistory();
    const { state } = React.createContext(TasksContext);
    console.log(state);
    return (
        <div>
            <span onClick={() => {
                history.push(`/test/${todo.id}`)
            }}>
                {todo.name}
            </span>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={(e) => e.target.checked}
                onClick={() => dispatch({
                    type: ACTIONS.TOGGLETODO,
                    payload: { id: todo.id }
                })}>
            </input>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}

export function doneTasksReducer(allTodos, action) {
    switch (action.type) {
        case ACTIONS.ADDTODO:
            allTodos = [...allTodos, newTodo(action.payload.name)];
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.TOGGLETODO:
            allTodos = allTodos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.DELETE:
            allTodos = allTodos.filter(todo =>
                todo.id !== action.payload.id)
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.REMOVEALL:
            allTasks = [];
            return [];
        case ACTIONS.FILTERDONE:
            allTodos = allTodos.filter(todo => todo.complete === true);
            showAllTasks(allTodos)
            return (allTodos);
        case ACTIONS.SHOWALLTASKS:
            console.log(allTasks);
            return allTasks;
        default:
            return allTodos;
    }
}
export function allTasksReducer(allTodos, action) {
    switch (action.type) {
        case ACTIONS.ADDTODO:
            allTodos = [...allTodos, newTodo(action.payload.name)];
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.TOGGLETODO:
            allTodos = allTodos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.DELETE:
            allTodos = allTodos.filter(todo =>
                todo.id !== action.payload.id)
            showAllTasks(allTodos)
            return allTodos;
        case ACTIONS.REMOVEALL:
            allTasks = [];
            return [];
        case ACTIONS.FILTERDONE:
            let list = showAllTasks(allTodos)
            return (list, allTodos)
        default:
            return allTodos;
    }
}
//Backup for tasks
export let allTasks = [];
function showAllTasks(tasks) {
    allTasks = tasks
    return allTasks
};
function newTodo(name) {
    return { id: Date.now(), name: name, complete: false, key: Date.now() };
}

function List() {
    const history = useHistory();
    // const initialState = { doneTodos: allTasks, allTodos: allTasks };
    // const [state, dispatch] = React.useReducer(combineReducers({
    //     doneTodos: doneTasksReducer,
    //     allTodos: allTasksReducer,
    // }), initialState)
    const { state, dispatch } = React.useContext(TasksContext);
    const [name, setName] = React.useState('');
    const { doneTodos } = state;
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
        setName("");
    }

    const handleToLogin = () => {

        history.replace("/login");
        // return props.setIsLogged(false);
    }
    // const history = useHistory();
    // if (props.isLogged === false) {
    //     history.replace("/login");
    // }
    return (

        <div>
            <div>
                <button
                    onClick={handleToLogin}
                >
                    To loggin Page
        </button>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => {
                    setName(e.target.value);
                }} />
            </form>
            <button onClick={() => dispatch({ type: ACTIONS.REMOVEALL })}>Remove all</button>
            <button onClick={() => dispatch({ type: ACTIONS.FILTERDONE })}> ShowDone </button>
            <button onClick={() => dispatch({ type: ACTIONS.SHOWALLTASKS })}> ShowAllTasks </button>
            {doneTodos.map((todo) => {
                return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />
            })}
        </div>


    )
}
export default function App(props) {
    return (
        <List />
    )
}



