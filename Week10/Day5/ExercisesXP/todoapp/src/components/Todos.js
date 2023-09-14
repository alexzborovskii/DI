import { useState, useEffect } from "react";
import "./Todos.css";
const uuid = require("uuid");

let todosdb = [
    { id: 1, task: "get something" },
    { id: 2, task: "wash something" },
];

const Todos = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        allTodos();
    }, []);

    const allTodos = () => {
        setTasks(todosdb);
    };

    const handleInput = async (e) => {
        try {
            if (e.key === "Enter") {
                const id = uuid.v4();
                if (e.target.value !== "") {
                    setTasks([...tasks, { id: id, task: e.target.value }]);
                    e.target.value = "";
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = (id) => {
        try {
            const newTasks = tasks.filter((item) => item.id !== id);
            setTasks(newTasks);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="root">
            <h1 id="header">Todos</h1>
            <div id="input-box">
                <input
                    id="task-input"
                    onKeyDown={(e) => handleInput(e)}
                    placeholder="Type new task..."
                />
            </div>
            <div id="tasks-box">
                {tasks.length === 0 ? (
                    <div id="no-tasks">
                        <p>There is no tasks! Nice job!</p>
                    </div>
                ) : (
                    tasks.map((item) => {
                        return (
                            <div
                                key={item.id}
                                onClick={() => deleteTask(item.id)}>
                                <h4 className="task">{item.task}</h4>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Todos;
