import React from "react";
import Child from "./Child";

class Color extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'red',
            show: true
        }
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.color !== this.props.color) {
            return false;
        } else {
            return true;
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ color: 'yellow' }), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.color !== this.state.color) {
        }
    }

    delete = () => {
        this.setState({ show: false })
    }
    render() {
        let comp;
        if (this.state.show) {
            comp = (
                <div>
                    <Child />
                    <button onClick={this.delete}>Delete Header!</button>
                </div>);
        }
        return (
            <div>
                <header>
                    {comp}
                </header>
                <div>
                    <p>My Favorite Color is {this.state.color}</p>
                    <button onClick={() => this.setState(state => ({ color: 'blue' }))}>
                        change the color</button>
                </div>
            </div>
        );
    }
}

export default Color;