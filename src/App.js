import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MachineCell from './MachineCell';
import Machine from './lib/Machine';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let machines = [];
    for (let i = 0; i < 100; i++) {
      machines.push(new Machine(i + 1, 1, '', 10000, 3500));
    }
    this.state = {
      machines: machines,
      started: false,
      errorLogs: []
    }
  }

  handleClick = () => {
    if (!this.state.started) {
      this.setState({
        started: true
      });
      let startPromise = new Promise((resolve, reject) => {
        this.state.machines.forEach((machine) => {
          machine.start();
        });
        resolve('done');
      });
      // Make sure update machines after starting
      startPromise.then((val) => {
        this.interval = setInterval(() => {
          this.setState({
            machines: [...this.state.machines]
          })
        }, 1000);
      });
    }
  };

  addLog = (log) => {
    this.setState({
      errorLogs: [log, ...this.state.errorLogs]
    })
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <h2>
          Helios Machine State Graph
        </h2>
        {this.state.started?
          <Button disabled>
          STARTED
          </Button>:
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            START
          </Button>
        }
        <ul className="grid-container">
          {
            this.state.machines.map((machine, index) => {
              return (
                <MachineCell
                  addLog={this.addLog}
                  key = {index}
                  errorMsg = {machine.errorMsg}
                  stage = {machine.stage}
                  status = {machine.status}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
