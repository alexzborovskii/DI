import { useState } from "react";

const Garage = (props) => {
    // const [color, setColor] = useState('color');

    return (
        <header>
            <h3>This Garage is  {props.size}</h3>
        </header>
    )
};

export default Garage;