import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import Editor from './components/Editor'
import '@blueprintjs/core/dist/blueprint.css';
import './App.css';
var Web3 = require('web3');

class App extends Component {

  constructor(props) {
    super(props);
    const web3 = new Web3(window.web3.currentProvider);
    this.state = { web3: web3 }
  }

  componentDidMount() {
    fetch('/users', { method: 'GET' })
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
