import { useState } from "react";

const Voting = () => {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
    ]);

    const vote = (obj) => {
        console.log("obj: ", obj);
        obj.votes++;
        setLanguages(...languages)
    };

    return (
        <>
            <h1>Vote for me!</h1>
            {languages.map((item, index) => {
                return (
                    <div key={index}>
                        {item.name} {item.votes} {"     "}
                        <button onClick={() => vote(item)}>Vote!</button>
                    </div>
                );
            })}
        </>
    );
};

export default Voting;
