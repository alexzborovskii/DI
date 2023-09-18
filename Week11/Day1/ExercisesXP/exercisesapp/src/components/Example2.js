import React from "react";

class Example2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = require("../ex3.json").Skills;

        return (
            <div
                style={{
                    marginTop: "100px",
                    border: "1px solid black",
                    display: "inline-block",
                }}>
                <h2>Exercise 3. Example 2</h2>
                <br />
                {data.map((item, index) => {
                    return (
                        <div  key={1000 - index}>
                            <h3>{item.Area}</h3>
                            <ul>
                            {item.SkillSet.map((skill, index) => (
                                <li key={100 - index}>{skill.Name}</li>
                            ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Example2;
