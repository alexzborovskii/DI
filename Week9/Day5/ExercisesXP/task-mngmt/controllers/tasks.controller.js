const fs = require("fs");

const getAllTasks = (req, res) => {
    try {
        const tasks = getData();
        res.send(tasks);
    } catch (error) {
        return next(error);
    }
};

const addTask = (req, res) => {
    try {
        const { name, description } = req.body;
        let tasks = getData();
        const newTask = {
            id: tasks.length + 1,
            name: name,
            description: description,
        };

        tasks.push(newTask);
        writeData(tasks);
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
};

const editTask = (req, res) => {
    try {
        const id = req.params.id;
        const { name, description } = req.body;
        let tasks = getData();
        let index = tasks.findIndex((item) => item.id == id);
        tasks[index] = {
            ...tasks[index],
            name: name,
            description: description,
        };
        writeData(tasks);
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
};

const deleteTask = (req, res) => {
    try {
        const id = req.params.id;
        let tasks = getData();
        const index = tasks.findIndex((item) => (item.id = id));
        if (index === -1)
            return res.status(404).json({ msg: "task not found" });
        tasks.splice(index, 1);
        writeData(tasks);
        res.json(tasks);
    } catch (error) {
        return next(error);
    }
};

const getData = () => {
    try {
        const data = fs.readFileSync("./data/tasks.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error(err);
        return [];
    }
};

const writeData = (data) => {
    try {
        const strData = JSON.stringify(data);
        fs.writeFileSync("./data/tasks.json", strData);
        console.log("file written successfully");
    } catch (err) {
        console.error(err);
    }
};

module.exports = { getAllTasks, addTask, editTask, deleteTask };
