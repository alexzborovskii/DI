import { useEffect, useState } from "react";
import User from "../../../../myapp/src/components/User";

const Text = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (props.txt === "alex") {
            getData();
        }
    });

    // console.log(props);

    useEffect(() => {
        if (props.txt == "alex") {
            console.log(props.txt);
        }
    }, [props.txt]);

    const getData = async () => {
        try {
            const res = await fetch(
                "http://jsonplaceholder.typicode.com/users"
            );
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <>
            <h1>Text Component</h1>
            {props.txt}
            {users.map((item, i) => (
                <div key={i}>{item.name}</div>
            ))}
        </>
    );
};
export default Text;
