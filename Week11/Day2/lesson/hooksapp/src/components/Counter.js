import { useState, } from "react";
import {useContext} from 'react';
import App, { AppContext } from "../App";
import SubCounter from "./SubCounter";

const Counter = (props) => {

    const {setCount, count} = useContext(AppContext);

    return (
        <>
            <h2>Counter Comp</h2>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <SubCounter />
        </>
    );
};

export default Counter;
