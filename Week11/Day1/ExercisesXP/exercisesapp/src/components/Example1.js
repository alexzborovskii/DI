import React from "react";

class Example1 extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        const arr1 = require("../ex3.json").SocialMedias;
        
        return (
            <div style={{ marginTop: "100px", border: "1px solid black", display: "inline-block" }}>
                <h2>Exercise 3. Example 1</h2>
                <br />
                {arr1.map((item, index) => {
                    return (<p key={index}>{item}</p>);
                })}
            </div>
        );
    }
}

export default Example1;
