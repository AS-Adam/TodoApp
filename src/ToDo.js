import *as React from "react";
import { useParams } from "react-router-dom";
import { TasksContext } from "./TaskProvider";

export default function ToDO() {
    const { id } = useParams();
    const { state } = React.useContext(TasksContext);
    // const taskDisp = () => { state.allTodos.find((task) => task.id == id) }
    // console.log(state.allTodos.map((task) => task.key === id));
    // console.log((state.allTodos.find((task) => task.id === JSON.stringify(id))).name);
    // console.log(id);
    // console.log(state.allTodos[0].id);
    // console.log(state.allTodos[0].id == id);

    return (
        <div>
            <p>
                {JSON.stringify((state.allTodos.find((task) => task.id == id).name))}
            </p>

        </div>
    )
}