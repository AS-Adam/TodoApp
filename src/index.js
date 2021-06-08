import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import PublicPage from "./PublicPage";
import AuthProvider from "./AuthProvider";
import ToDo from "./ToDo";

function Wrapper() {
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <div>
      <AuthProvider>
        <Switch>
          <Route path="/todo">
            <App isLogged={isLogged} setIsLogged={setIsLogged} />
          </Route>
          <Route path="/login">
            <PublicPage isLogged={isLogged} setIsLogged={setIsLogged} />
          </Route>
          <Route path="/test/:id/">
            <ToDo />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper></Wrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
