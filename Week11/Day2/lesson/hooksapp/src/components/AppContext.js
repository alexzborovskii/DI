import logo from "./logo.svg";
import "./App.css";
import { useState, createContext } from "react";
import Counter from "./components/Counter";
import SubCounter from "./components/SubCounter";
import Text from "./components/Text";

// useContext - state management

//App - [count, setCount]
// <Context = count setCount>
// |_ Counter = props increase count by 1
// |_SubCounter - props - count
// </Context>

// useRef
// useReducer

export const AppContext = createContext();
export const AppTextContext = createContext();

function App() {
    const [count, setCount] = useState(10);
    const [txt, setTxt] = useState("bla bla bla");

    return (
        <div className="App">
            <h2>Counter</h2>
            {txt}
            <AppContext.Provider value={{ count, setCount, title: "Banana" }}>
                <Counter />
            </AppContext.Provider>
            {/* <Text setTxt={setTxt}/> {" "} */}
            <AppTextContext.Provider value={{setTxt}}>
                <Text />{" "}
            </AppTextContext.Provider>
        </div>
    );
}

export default App;
