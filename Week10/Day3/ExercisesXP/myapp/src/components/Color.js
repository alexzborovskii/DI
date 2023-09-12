import { useState, useEffect } from "react";


const Color = () => {
    const [favoriteColor, setfavoriteColor] = useState("red");

    useEffect(() => {
        setfavoriteColor('yellow')
        alert("UseEffect reached")
    }, []);

     return (
        <header>
            <h2>My favorite color is {favoriteColor}</h2>
            <button onClick={() => setfavoriteColor("blue")}>Change color</button>
        </header>
     )
}

export default Color