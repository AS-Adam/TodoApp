// import * as React from 'react';
// function TaskInput({ todo, dispatch }) {
//   return (
//     <div>
//       <span>
//         {todo.name}
//       </span>
//       <input
//         type="checkbox"
//         checked={todo.complete}
//         onChange={(e) => e.target.checked}
//         onClick={() => dispatch({
//           type: ACTIONS.TOGGLETODO,
//           payload: { id: todo.id }
//         })}>
//       </input>
//       <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
//     </div>
//   );
// }
// const ACTIONS = {
//   ADDTODO: 'addToDo',
//   TOGGLETODO: 'toggleToDo',
//   DELETE: 'deleteTask',
//   REMOVEALL: "removeAll",
//   FILTERDONE: "filterDone",
//   SHOWALLTASKS: "showAllTasks"
// };
// ///REDUCER////
// function allTasksReducer(allTodos, action) {
//   switch (action.type) {
//     case ACTIONS.ADDTODO:

//       return [...allTodos, newTodo(action.payload.name)];;
//     case ACTIONS.TOGGLETODO:
//       return allTodos.map(todo => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTIONS.DELETE:
//       return allTodos.filter(todo =>
//         todo.id !== action.payload.id
//       );
//     case ACTIONS.REMOVEALL:
//       return [];
//     case ACTIONS.FILTERDONE:
//       return allTodos.filter(todo => todo.complete === true);
//     // case ACTIONS.SHOWALLTASKS:
//     //   return todos;
//     default:
//       return allTodos;
//   }
// }
// function doneTasksReducer(allTodos, action) {
//   switch (action.type) {
//     case ACTIONS.ADDTODO:
//       allTodos = [...allTodos, newTodo(action.payload.name)];
//       return allTodos;
//     case ACTIONS.TOGGLETODO:
//       return allTodos.map(todo => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTIONS.DELETE:
//       return allTodos.filter(todo =>
//         todo.id !== action.payload.id
//       );
//     case ACTIONS.REMOVEALL:
//       return [];
//     case ACTIONS.SHOWALLTASKS:
//       return;
//     default:
//       return allTodos;
//   }
// }

// // const InitialState = { allTasks: [], completedTasks: [] };
// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false, key: Date.now() };
// }
// // function filterList(taskList) {
// //   const taskFiltred = taskList;
// //   const filtredTaskToShow = taskFiltred.filter(todo => todo.complete === true);
// //   console.log(filtredTaskToShow);
// //   console.log(taskList)
// //   return filtredTaskToShow
// // }
// function combineReducers(reducers) {
//   return (state = {}, action) => {
//     const newState = {};
//     for (let key in reducers) {
//       newState[key] = reducers[key](state[key], action);
//     }
//     return newState;
//   }
// }
// const initialState = { allTodos: [], doneTodos: [] };
// export default function App() {
//   const [state, dispatch] = React.useReducer(combineReducers({
//     allTodos: allTasksReducer,
//     doneTodos: doneTasksReducer
//   }), initialState)
//   const [name, setName] = React.useState('');
//   const { allTodos, doneTodos } = state;
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
//     setName("");
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={e => {
//           setName(e.target.value);
//         }} />
//       </form>
//       <button onClick={() => dispatch({ type: ACTIONS.REMOVEALL })}>Remove all</button>
//       <button onClick={() => dispatch({ type: ACTIONS.FILTERDONE })}> ShowDone </button>
//       <button onClick={() => dispatch({ type: ACTIONS.SHOWALLTASKS })}> ShowAllTasks </button>
//       {allTodos.map(todo => {
//         return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />
//       })}
//       <br></br>
//       {doneTodos.map(todo => {
//         return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />
//       })}


//     </>

//   )
// }





/// Second Code


// import * as React from 'react';
// function TaskInput({ todo, dispatch }) {
//   return (
//     <div>
//       <span style={{ textDecorationLine: todo.complete ? 'line-through' : 'none', color: todo.complete ? 'red' : 'black' }}>
//         {todo.name}
//       </span>
//       <input
//         type="checkbox"
//         checked={todo.complete}
//         onChange={(e) => e.target.checked}
//         onClick={() => dispatch({
//           type: ACTIONS.TOGGLETODO,
//           payload: { id: todo.id }
//         })}>
//       </input>
//       <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
//     </div>
//   );
// }
// const ACTIONS = {
//   ADDTODO: 'addToDo',
//   TOGGLETODO: 'toggleToDo',
//   DELETE: 'deleteTask',
//   REMOVEALL: "removeAll",
//   FILTERDONE: "filterDone",
//   SHOWALLTASKS: "showAllTasks"
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADDTODO:
//       // todos.allTasks.push(newTodo(action.payload.name));
//       // todos.comleteTasks = [...todos.comleteTasks, newTodo(action.payload.name)];
//       return todos;
//     case ACTIONS.TOGGLETODO:
//       return todos.map(todo => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTIONS.DELETE:
//       return todos.filter(todo =>
//         todo.id !== action.payload.id
//       );
//     case ACTIONS.REMOVEALL:
//       return [];
//     case ACTIONS.FILTERDONE:
//       return filterList(todos).filter(todo => todo.complete === true);
//     case ACTIONS.SHOWALLTASKS:
//       return todos;
//     default:
//       return todos;
//   }
// }
// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false, key: Date.now() + 1 };
// }
// // function filterList(taskList) {
// //   const doneList = taskList;
// //   console.log(doneList);
// //   return (doneList.filter(todo => todo.complete === true));
// // }
// export default function App({ initialState = { allTasks: [], comleteTasks: [] } }) {
//   const [todos, dispatch] = React.useReducer(reducer, initialState);
//   const [name, setName] = React.useState('');
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
//     setName("");
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={e => {
//           setName(e.target.value);
//         }} />
//       </form>
//       <button onClick={() => dispatch({ type: ACTIONS.REMOVEALL })}>Remove all</button>
//       <button onClick={() => dispatch({ type: ACTIONS.FILTERDONE })} > ShowDone</button>
//       <button onClick={() => dispatch({ type: ACTIONS.SHOWALLTASKS })}>ShowAllTasks</button>
//       {todos.allTasks.map(todo => {
//         return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />//przekazywane dane
//       })}
//     </>
//   )
// }

//THIRD CODE 



///////UseContext/////


// const countContext = React.createContext(0);
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// function Counter() {
//   const { dispatch } = React.useContext(countContext);
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//     </div>
//   )
// }
// function CountProvider(props) {
//   const initialCount = { count: 0 };
//   const [state, dispatch] = React.useReducer(reducer, initialCount);
//   return (
//     <countContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</countContext.Provider>
//   )
// }
// function CountDisplay() {
//   const { state } = React.useContext(countContext);
//   return (
//     <p>{state.count}</p>
//   )
// }









///FOURTH TRY WORKS CODE 
import * as React from 'react';
import { Redirect, useHistory } from "react-router-dom";
function TaskInput({ todo, dispatch }) {
  const history = useHistory();
  // const  name  = useParams();
  // function ShowToDos({ todo }) {
  //   history.push(todo.name);
  // }

  return (
    <div>
      <span onClick={() => {
        history.push(`/test/${todo.id}`)
        // return ShowToDos({ todo })
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
const ACTIONS = {
  ADDTODO: 'addToDo',
  TOGGLETODO: 'toggleToDo',
  DELETE: 'deleteTask',
  REMOVEALL: "removeAll",
  FILTERDONE: "filterDone",
  SHOWALLTASKS: "showAllTasks"
};
///REDUCER////
function doneTasksReducer(allTodos, action) {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...allTodos, newTodo(action.payload.name)];;
    case ACTIONS.TOGGLETODO:
      return allTodos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return allTodos.filter(todo =>
        todo.id !== action.payload.id
      );
    case ACTIONS.REMOVEALL:
      return [];
    case ACTIONS.FILTERDONE:
      return allTodos.filter(todo => todo.complete === true);
    case ACTIONS.SHOWALLTASKS:
      console.log(allTasks);
      return allTasks;
    default:
      return allTodos;
  }
}
function allTasksReducer(allTodos, action) {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      allTodos = [...allTodos, newTodo(action.payload.name)];
      return allTodos;
    case ACTIONS.TOGGLETODO:
      return allTodos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return allTodos.filter(todo =>
        todo.id !== action.payload.id
      );
    case ACTIONS.REMOVEALL:
      return [];
    case ACTIONS.FILTERDONE:
      let list = showAllTasks(allTodos)
      return (list, allTodos)
    default:
      return allTodos;
  }
}
let allTasks;
function showAllTasks(tasks) {
  allTasks = tasks
  return allTasks
};
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false, key: Date.now() };
}
function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }
}
export default function App(props) {
  const initialState = { doneTodos: [], allTodos: [] };
  const [state, dispatch] = React.useReducer(combineReducers({
    doneTodos: doneTasksReducer,
    allTodos: allTasksReducer,
  }), initialState)
  const [name, setName] = React.useState('');
  const { doneTodos } = state;
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADDTODO, payload: { name: name } });
    setName("");
  }
  const history = useHistory();

  if (props.isLogged === false) {
    history.replace("/login");
    // return (
    //   <Redirect to={{
    //     pathname: "/login",
    //   }} />
    // );
  }
  // console.log(allTasks);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            props.setIsLogged(false);
          }}
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
      {doneTodos.map(todo => {
        return <TaskInput key={todo.key} todo={todo} dispatch={dispatch} />
      })}
    </div>

  )
}