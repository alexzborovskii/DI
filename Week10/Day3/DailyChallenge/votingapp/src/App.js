import "./App.css";
import { useState } from "react";
import Voting from "./components/Voting";

function App() {
    // const [languages, setLanguages] = useState([
    //     { name: "Php", votes: 0 },
    //     { name: "Python", votes: 0 },
    //     { name: "JavaSript", votes: 0 },
    //     { name: "Java", votes: 0 },
    // ]);

    // console.log(languages);

    // const adder = (index) => {
    //   const updatedLang = [...languages];
    //   updatedLang[index].votes += 1;
    //   setLanguages(updatedLang);
    // };

    // return (
    //     <div className="root">
    //         {languages.map((item, index) => (
    //             <div key={index} className="language-container">
    //                 <span className="vote-count">{item.votes}</span>
    //                 <span className="language">{item.name}</span>
    //                 <button className="vote-button" onClick={() => adder(index)}>Click here to vote</button>
    //             </div>
    //         ))}
    //     </div>
    // );

    return (
        <header>
            <Voting />
        </header>
    );
}

export default App;
