import "./App.css";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            header: "asdf",
            input: "",
            response: "",
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch("http://localhost:3005/api/hello/");
            const data = await res.json();
            this.setState({ header: data });
        } catch (error) {
            console.log(error);
        }
    }

    async handleInput(e) {
        try {
            e.preventDefault();
            // console.log("this.state.input: ", this.state.input);
            const res = await fetch("http://localhost:3005/api/world/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: this.state.input }),
            });

            if (res.ok) {
                const data = await res.json();
                this.setState({ response: data.msg });
            } else {
                console.log("res.status: ", res.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <br />
                <form onSubmit={(e) => this.handleInput(e)}>
                    {" "}
                    <h3>Post to server</h3>
                    <input
                        onChange={(e) =>
                            this.setState({ input: e.target.value })
                        }
                    />
                    <input type="submit" value="Send" />
                    {this.state.response && (
                        <p>Response from server: {this.state.response}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default App;
