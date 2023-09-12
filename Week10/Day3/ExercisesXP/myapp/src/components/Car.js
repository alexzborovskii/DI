import { useState } from "react";
import Garage from "./Garage";
const Car = (props) => {
    const [color, setColor] = useState("color");

    return (
        <header>
            <h2>
                This car is {color} {props.carInfo.model}.
                <Garage size="small" />
            </h2>
        </header>
    );
};

export default Car;
