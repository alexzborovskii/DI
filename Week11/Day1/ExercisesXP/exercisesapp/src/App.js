import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";

const sendData = {
    key1: "myusername",
    email: "mymail@gmail.com",
    name: "Isaac",
    lastname: "Doe",
    age: 27,
};

function App() {
    const getData = async () => {
        try {
            const res = await fetch(
                "https://webhook.site/6c1965d9-ec7b-4d59-8f5b-3471ef038c96",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sendData),
                }
            );
            console.log("res: ", res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        //  /* EXERCISE 1 */
        <BrowserRouter>
            <NavbarComp />
                <Routes>
                    <Route exact path="/"  element={<ErrorBoundary><HomeScreen key={1}/></ErrorBoundary>} />
                    <Route exact path="/profile" element={<ErrorBoundary><ProfileScreen key={2} /></ErrorBoundary>} />
                    <Route exact path="/shop" element={<ErrorBoundary><ShopScreen key={3}/></ErrorBoundary>} />
                </Routes>
            /* EXERCISE 4 */
            <h2>EXERCISE 4</h2>
            <button onClick={getData}>Fetch</button>
        </BrowserRouter>

    );
}

export default App;
