import "./App.css";
import React, {
    createContext,
    useContext,
    useReducer,
    useRef,
    useState,
} from "react";

// Context for managing tasks
const TaskContext = createContext();

let tasksArr = [];

// Actions
const ADD_TASK = "ADD_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const EDIT_TASK = "EDIT_TASK";
const FILTER_TASKS = "FILTER_TASKS";

// Reducer function
function taskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: Date.now(),
                text: action.text,
                completed: false,
            };
            tasksArr.push(newTask);
            return [...state, newTask];
        case COMPLETE_TASK:
            let compTask = tasksArr.findIndex((item) => item.id === action.id);
            tasksArr[compTask]["completed"] = tasksArr[compTask]["completed"] === true ? false : true;
            return state.map((task) => {
                if (task.id === action.id) {
                    // if (task["completed"] === false) {
                    //     console.log('if task["completed"]: ', task["completed"]);
                        return { ...task, completed: true };
                    // } 
                    // else {
                    //     console.log(
                    //         'else task["completed"]: ',
                    //         task["completed"]
                    //     );
                    //     return { ...task, completed: false };
                    // }
                } else {
                    return task;
                }
            });

        case REMOVE_TASK:
            let delTask = tasksArr.findIndex((item) => item.id === action.id);
            console.log("delTask: ", delTask);
            tasksArr.splice(delTask, 1);
            return state.filter((task) => task.id !== action.id);
        case EDIT_TASK:
            let editTask = tasksArr.findIndex((item) => item.id === action.id);
            tasksArr[editTask]["text"] = action.text;
            return state.map((task) =>
                task.id === action.id ? { ...task, text: action.text } : task
            );
        case FILTER_TASKS:
            state = [...tasksArr];
            return state.filter((task) => {
                if (action.filter === "all") return true;
                if (action.filter === "completed") return task.completed;
                if (action.filter === "active") return !task.completed;
                return true;
            });
        default:
            return state;
    }
}

function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [filter, setFilter] = useState("all"); // Default filter is 'all'
    const [count, setCount] = useState(0);

    const editRef = useRef(null);

    const handleEditTask = (id) => {
        const editedText = editRef.current.value;
        setCount(count - 1);
        dispatch({ type: EDIT_TASK, id, text: editedText });
    };

    const handleFilterTasks = (filter) => {
        setFilter(filter);
        // console.log("FILTER: ", filter);
        dispatch({ type: FILTER_TASKS, filter });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                dispatch,
                filter,
                handleEditTask,
                handleFilterTasks,
                count,
                setCount,
                editRef,
            }}>
            {children}
        </TaskContext.Provider>
    );
}

function TaskAdder() {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        dispatch({ type: ADD_TASK, text: taskText });
        setTaskText("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

function TaskList() {
    const {
        tasks,
        dispatch,
        filter,
        handleEditTask,
        handleFilterTasks,
        count,
        setCount,
        editRef,
    } = useContext(TaskContext);

    // console.log("tasks from TaskList", tasks);

    return (
        <div>
            <h2>Task List</h2>
            <div>
                <button onClick={() => handleFilterTasks("all")}>All</button>
                <button onClick={() => handleFilterTasks("completed")}>
                    Completed
                </button>
                <button onClick={() => handleFilterTasks("active")}>
                    Active
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.completed ? "completed" : ""}>
                        {task.id === editRef.current?.id ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={task.text}
                                    ref={editRef}
                                />
                                <button onClick={() => handleEditTask(task.id)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                {task.text}
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: REMOVE_TASK,
                                            id: task.id,
                                        })
                                    }>
                                    Remove
                                </button>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: COMPLETE_TASK,
                                            id: task.id,
                                        })
                                    }>
                                    Complete
                                </button>
                                <button
                                    onClick={() => {
                                        setCount(count + 1);
                                        return (editRef.current = task);
                                    }}>
                                    Edit
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <TaskProvider>
                <h1>Task Manager</h1>
                <TaskAdder />
                <TaskList />
            </TaskProvider>
        </div>
    );
}

export default App;
