import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const fullName = (
    <>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
    </>
);

function App() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello World!</p>
                {myelement}
                <p>React is {sum} times better with JSX</p>
                {fullName}

                <UserFavoriteAnimals info={user.favAnimals} />


                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <Exercise />
        </div>
    );
}

export default App;
