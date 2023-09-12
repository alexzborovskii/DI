import {useState} from "react";
// import Hello from "./components/Hello";
import User from "./components/User";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import "tachyons";



// JSX
function App() {
  const [users, setUsers] = useState([]);
  const[txt, setText] = useState('Hello hooks');

    console.log("users=>", users);

    const getData = async () => {
        try {
            const res = await fetch(
                "http://jsonplaceholder.typicode.com/users"
            );
            const data = await res.json();
            console.log(data);
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
    };
    return (
      
        <>
        <h2>{txt}</h2>
            <input type="text" onChange={handleChange} />
            <button onClick={(e) => getData(e)}>Get Users!</button>
            <div>
                {users && users.map((item, indx) => {
                    return <User info={item} key={uuidv4()} />;
                })}
            </div>
        </>
    );
}

export default App;
