//1) tener la variable React en el scope
import React from 'react';
//2) tener la varaible ReactDom en el scope
import ReactDOM from 'react-dom';
//3) tener la variable  App en el scope
import App from "./App"
import "./styles.scss"
//4) renderizar App en el Dom
ReactDOM.render(<App/>,document.getElementById('root'));