import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Counter --> constructor()");
    }

    // state = {
    //     count: 0
    // }

    counter = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    };

    componentDidMount() {
        this.timer = setInterval(this.counter, 10000);
        console.log("Counter --> componentDidMount()");
        //load state data from database
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            "Counter --> componentDidUpdate() prevState.count",
            prevState.count, 'this is the current state: ', this.state.count
        );
        //if (this.props.userID !== prevProps.userID) {
        //  this.fetchData(this.props.userID);
        //}
    }

    componentWillUnmount() {
        console.log("Counter --> componentWillUnmount()");
        // here we clean up - we could also cancel a request/subscription
        clearInterval(this.timer);
    }

    render() {
        console.log("Counter --> render()");
        return <h1> {this.state.count}</h1>;
    }
}

export default Counter;