import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        const newCount = this.state.count + 1;
        this.setState({count: newCount })
    }
    
    render(){
        if(this.state.count > 5) {
            throw new Error ("I crashed");
        }
        return(
        <>
            <button onClick={this.handleClick}>{this.state.count}</button>
        </>

        ) 
    }
}

export default BuggyCounter;