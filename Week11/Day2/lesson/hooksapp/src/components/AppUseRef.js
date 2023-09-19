import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

//useRef

// ref to DOM element
// cache a value the no need to be re-render

function App() {
    const [count, setCount] = useState(10);

    const inputRef = useRef(null);
    const inputEmailRef = useRef(null);
    const txt = useRef('set your name');
    let txtOne = 'txt one';

    const handleClick = () =>{
      inputRef.current.focus();
      console.log(inputEmailRef.current.value);
    }

    const clickName = () => {
      txt.current = txt.current+"0";
      txtOne = 'text two'
      console.log(txt.current, txtOne);

      // setCount(count+1)
    }

    const reRender = () => {
      setCount(count + 1)
    }

    useEffect(() => {
      console.log("inputRef: ", inputRef);
      // inputRef.current.focus()
      inputRef.current.value = 'aaa';
      inputEmailRef.current.value = 'aaa@asdf.lakj';
    }, [])
    return (
        <div className="App">
            <h2>useRef</h2>
            <h4>{txt.current}</h4>
            <h4>{txtOne}</h4>
            <input ref={inputRef} /> <br/>
            <input type="email" ref={inputEmailRef} />
            {/* <button onClick={() => inputRef.current.focus()}>input focus</button> */}
            {/* <button onClick={() => console.log(inputEmailRef.current.value)}>input focus</button> */}
            {/* <button onClick={handleClick}>input focus</button> */}
            <button onClick={clickName}>input focus</button>
            <button onClick={reRender}>input focus</button>
        </div>
    );
}

export default App;
