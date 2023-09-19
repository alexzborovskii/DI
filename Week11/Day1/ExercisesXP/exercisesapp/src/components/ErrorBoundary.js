import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
        error:error,
        errorInfo: errorInfo
      })
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>An error has occured.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;