import { useHistory } from "react-router-dom";
import *as React from "react";
export default function PublicPage(props) {
    const history = useHistory();
    console.log(history);
    // if (props.isLogged) {
    //     history.push("/todo");
    // return (

    // <Redirect to={{
    //     pathname: "/todo",
    // }} />
    // );
    // }

    const handleLogin = () => {

        history.replace("/todo");
        return props.setIsLogged(true);
    }
    return (
        <div>
            <h1>Welcome Welcome</h1>
            <button onClick={handleLogin}>Click</button>
        </div>
    )
}