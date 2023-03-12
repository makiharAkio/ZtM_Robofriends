import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: error })
    }

    render() {
        return (this.state.hasError) ?
            <h1>Error!!</h1> :
            this.props.children
    }
}

export default ErrorBoundry;