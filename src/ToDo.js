import *as React from "react";
import { useHistory, useParams } from "react-router-dom";
import TaskInput from "./App";
export default function ToDO() {
    const history = useParams();
    console.log(history);
    return (
        <div>
            <p>
                {history.id}
            </p>
        </div>)
}