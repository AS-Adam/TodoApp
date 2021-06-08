import *as React from "react";
import { useParams } from "react-router-dom";

export default function ToDO() {
    const history = useParams();
    console.log(history);
    return (
        <div>
            <p>
                {history.name}
            </p>
        </div>)
}