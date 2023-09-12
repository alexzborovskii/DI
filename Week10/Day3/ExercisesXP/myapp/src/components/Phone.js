// brand: "Samsung"
// model: "Galaxy S20"
// color: "color"
// year: 2020

import { useState } from "react";

const Phone = () => {
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("color");
    const [year, setYear] = useState(2020);

    const changeColor = () => {
        setColor("blue");
    };

    return (
        <>
            <h3>My phone is {brand}</h3>
            <p>
                It is a {color} {model} from {year}
            </p>
            <button onClick={changeColor}>Change color</button>
        </>
    );
};

export default Phone;
