import React, { Component } from 'react';
import './App.css';

import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isRunning: true };
    console.log('App --> contructor()');
  }

  stopCounter = () => {
    this.setState({ isRunning: false })
  }

  componentDidMount() {
    console.log('App --> componentDidMount()');
    //load state data from database
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App --> componentDidUpdate() prevState.isRunning:', prevState.isRunning);
    //if (this.props.userID !== prevProps.userID) {
    //  this.fetchData(this.props.userID);
    //} 
  }

  render() {
    console.log('App --> render()');
    return this.state.isRunning ? (
      <div className="App">
        <h2>Clicking this button will destroy the Counter component and clear the state.</h2>
        <button onClick={this.stopCounter}>Stop the counter</button>

        <Counter />
      </div>
    ) : null
  }
}

export default App;