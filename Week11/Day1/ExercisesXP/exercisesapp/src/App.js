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
        /* EXERCISE 1 */
        <BrowserRouter>
            <NavbarComp />
            <ErrorBoundary>
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/profile" element={<ProfileScreen />} />
                    <Route exact path="/shop" element={<ShopScreen />} />
                </Routes>
            </ErrorBoundary>
            <h2>EXERCISE 4</h2>
            <button onClick={getData}>Fetch</button>
        </BrowserRouter>

        /* EXERCISE 4 */
    );
}

export default App;
