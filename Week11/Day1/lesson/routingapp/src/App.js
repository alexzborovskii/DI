import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> {" "}
            <Link to='/about'>About</Link> {" "}
            <Link to='/shop'>Shop</Link> {" "}


          </nav>
          <Routes>
            <Route path='/' element={<><Home /></>} />
            <Route path='/about' element={<><About /></>} />
            <Route path='/shop' element={<><Shop /></>} />
          </Routes>
        </div>
    );
}

export default App;
