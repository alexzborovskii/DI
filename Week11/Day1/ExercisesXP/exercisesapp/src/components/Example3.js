import React from "react";

class Example3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = require("../ex3.json").Experiences;

        return (
            <div
                style={{
                    marginTop: "100px",
                    border: "1px solid black",
                    display: "inline-block",
                }}>
                <h2>Exercise 3. Example 3</h2>
                <br />
                {data.map((item, index) => {
                    return (
                        <div key={index + 1000}>
                            <img src={item.logo} />
                            <a href={item.url}>
                                <h3>{item.companyName}</h3>
                            </a>
                            {item.roles.map((role, index) => (
                                <div  key={10000 - index}>
                                    <p>{role.title}</p>
                                    <p>{role.startDate}</p>
                                    <p>{role.location}</p>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Example3;
