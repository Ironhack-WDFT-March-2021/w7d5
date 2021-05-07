import './App.css';
import React from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {

  state = {
    message: ''
  }

  componentDidMount() {
    socket.on('message', data => {
      this.setState({
        message: data.message
      })
    })
  }

  onChange = e => {
    this.setState({
      message: e.target.value
    })
    socket.emit('new-message', {
      message: e.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <input type="text" value={this.state.message} onChange={this.onChange} />
        </header>
      </div>
    );
  }
}

export default App;
