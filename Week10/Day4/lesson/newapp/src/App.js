import "./App.css";
import { useState } from "react";

import Parent from "./components/Parent";
import Child from "./components/Child";
import Counter from "./components/Counter";
import ErrorBound from "./components/ErrorBound";

function App() {
    return (
        <>
            <ErrorBound>
                <Counter />
            </ErrorBound>
            <Counter />
            <h1>Something...</h1>
        </>
    );
}

export default App;
