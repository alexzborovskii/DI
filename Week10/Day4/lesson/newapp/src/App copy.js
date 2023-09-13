import "./App.css";
import { useState } from "react";

function App() {

  const [inputs, setInputs] = useState({
      email: '',
      pass: '',
      uname: '',
      yesno: "",
      color: "",
    })


    const handleInputs = (e) => {
        // e.target.checked

        const value = (e.target.type ==='checkbox')
        ? e.target.checked
        : e.target.value;
      console.log(value)
      setInputs({...inputs, [e.target.name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputs=>", inputs)
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    Email: <input name="email" onChange={(e) => handleInputs(e)} />
                    Password:<input name="pass" onChange={(e) => handleInputs(e)} />
                    Username:<input name="uname" onChange={(e) => handleInputs(e)} />
                    Yes/no: {" "} <input name="yesno" type="checkbox" onChange={(e) => handleInputs(e) }/>

                    <input  type="submit" value="Submit" />
                    <br />

                    <select name="color" onChange={(e) => handleInputs(e)} >
                      <option value='1'>Red</option>
                      <option value='2'>Yellow</option>
                      <option value='3'>Green</option>

                    </select>
                    <br />

                </form>
            </header>
        </div>
    );
}

export default App;
