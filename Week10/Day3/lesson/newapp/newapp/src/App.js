import { useState, useEffect } from "react";
import TextProps from "./components/Text";

import "./App.css";

function App() {
    const [txt, setText] = useState('');
    // const [txt1, setText1] = useState('');

    // useEffect(()=> {
    //   console.log("a");
    // }, []);
    
    // useEffect(()=> {
    //   if(txt != "a")
    //   console.log(txt, txt1);
    // }, [txt1, txt]);

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <br></br>
            {/* {txt} */}
            <TextProps txt={txt} />
            {/* <input type="text" onChange={(e) => setText(e.target.value)} /> */}
        </>
    );
}

export default App;
