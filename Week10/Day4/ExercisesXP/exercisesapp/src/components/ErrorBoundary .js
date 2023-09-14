import React from "react";

class ErrorBound extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            errorInfo: "",
        }
    }
    componentDidCatch = (error, errorInfo) =>{
        this.setState({error:error});
        this.setState({errorInfo:errorInfo});
        console.log(error)
    }
    render(){
        if(this.state.error) {
            return (
                <>Unfortunately, {this.state.error.toString()} happend! <br/> </>
                
            )
        }
        return this.props.children;
    }
}

export default ErrorBound;