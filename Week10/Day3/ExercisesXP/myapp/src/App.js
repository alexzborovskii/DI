import "./App.css";
import Car from "./components/Car";
import Event from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";

function App() {
    const carinfo = { name: "Ford", model: "Mustang" };
    return (
      <>
      <Car carInfo={carinfo} /> 
      <Event/>
      <Phone />
      <Color /> 
      </>
      )
}

export default App;
