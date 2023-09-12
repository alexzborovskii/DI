import { useState } from "react";

const clickMe = () => {
    alert("I was clicked");
};

const handleKeyDown = (e) => {
    if (e.key == "Enter") {
        console.log(e.target.value)
        alert(`The Enter key was pressed, your input is: ${e.target.value}`)
    }

}


const Event = () => {
    const [isToggleOn , setToggle] = useState('ON');

    const switchToggler = () => {
        console.log()
       if  (isToggleOn == "ON") {
        setToggle("OFF");
       } else {
        setToggle("ON")
       }
    }
    
    return (
        <>
            <input type="text" onKeyDown={handleKeyDown} />
            <button onClick={clickMe}>Click Me</button>
            <button onClick={switchToggler}>{isToggleOn}</button>
        </>
    );
};

export default Event;
