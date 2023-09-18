const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(3005, () => {
    console.log(`run on port 3005`);
});

app.get('/api/hello', (req, res) => {
    res.json('Hello from Express')
});

app.post("/api/world", (req, res) => {
    const { input } = req.body;
    const response = `“I received your POST request. This is what you sent me: ${input}`;
    res.json({ msg: response });
});  