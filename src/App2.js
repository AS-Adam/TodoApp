// function List() {
//   const [taskList, setTaskList] = React.useState([]);
//   function addTask(taskInput) {
//     const actualList = [...taskList, taskInput];
//     setTaskList(actualList);
//     console.log(taskList);
//   }
//   function removeTask() {
//     setTaskList();
//   }
//   return (<>
//     <div>
//       <TaskInput
//         AddTask={addTask}
//         RemoveTask={removeTask}
//       />
//       <p>{taskList}</p>
//     </div>
//   </>
//   )
// }
// export default function App() {
//   return (<List />);
// }