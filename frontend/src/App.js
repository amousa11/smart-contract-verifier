import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import Editor from './components/Editor'
import '@blueprintjs/core/dist/blueprint.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/sendContractSource', { method: 'GET' })
        .then( function (res) {
            console.log(res)
        })
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App container-fluid">

        <div className="row pad-1">
          <div className="col-sm-3"><h1>Smart Contract Verifier</h1></div>
          <div className="col-sm-6"></div>
          <div className="col-sm-3"></div>
        </div>

        <div className="row pad-1">
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
