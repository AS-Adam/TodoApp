// import * as React from 'react';
// import { ACTIONS } from "./App.js";
// export default function TaskInput({ todo, dispatch }) {
//     return (
//         <div>
//             <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>

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