import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";

const initState = {
    result: 0,
    title: "using useReducer",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "PLUS":
            // return { ...state, result: state.result + 1 };
            return { ...state, result: state.result + action.payload };
        case "MINUS":
            return { ...state, result: state.result - 1 };
        case "MULTIPLY":
            return { ...state, result: state.result * 2 };
        case "DIVIDE":
            return { ...state, result: state.result / 2 };
        default:
            return { ...state };
    }
};
function App() {
  
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="App">
            <h2>Simple Calculator {state.title}</h2>
            Result: {state.result} <br />
            <button onClick={()=> dispatch({type:'PLUS', payload: 5})}>Plus 1</button>
            <button onClick={()=> dispatch({type:'MINUS'})}>Minus 1</button>
            <button onClick={()=> dispatch({type:'MULTIPLY'})}>Multiply by 2</button>
            <button onClick={()=> dispatch({type:'DIVIDE'})}>Divide by 2</button>
        </div>
    );
}

export default App;
