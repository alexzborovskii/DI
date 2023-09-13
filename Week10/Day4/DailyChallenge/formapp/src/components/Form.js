import { useState } from "react";
import "./Form.css";

const Form = () => {
    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        age: "",
        gender: "",
        nuts: "",
        lactose: "",
        vegan: "",
        destination: "",
    });

    const handleInputs = (e) => {
        // e.target.checked

        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        console.log(value);
        setInputs({ ...inputs, [e.target.name]: value });
    };

    return (
        <div id="form-root">
            <form action="#" id="form">
                <input
                    placeholder="First Name:"
                    name="fname"
                    onChange={(e) => handleInputs(e)}
                    type="text"
                />
                <input
                    placeholder="Last Name"
                    name="lname"
                    onChange={(e) => handleInputs(e)}
                    type="text"
                />
                <input
                    placeholder="Age"
                    name="age"
                    onChange={(e) => handleInputs(e)}
                    type="text"
                />

                <input type="radio" name="gender" value="male" id="male" onChange={(e) => handleInputs(e)}/>
                <label htmlFor="male">Male</label>
                <br />
                <input type="radio" name="gender" value="female" id="female" onChange={(e) => handleInputs(e)}/>
                <label htmlFor="male">Female</label>
                <br />
                <br />

                <div>
                    <input
                        name="nuts"
                        type="checkbox"
                        onChange={(e) => handleInputs(e)}
                        id="nuts"
                    />
                    <label htmlFor="nuts">Nuts free</label>
                    <br />
                    <input
                        name="lactose"
                        type="checkbox"
                        onChange={(e) => handleInputs(e)}
                        id="lactose"
                    />
                    <label htmlFor="lactose">Lactose free</label>
                    <br />
                    <input
                        name="vegan"
                        type="checkbox"
                        onChange={(e) => handleInputs(e)}
                        id="vegan"
                    />
                    <label htmlFor="vegan">Vegan</label>
                    <br />
                </div>

                <label>Select your destination:</label>
                <br />
                <select name="destination" onChange={(e) => handleInputs(e)}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
        </div>
    );
};

export default Form;
