import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends Component {
  constructor(props)  {
    super(props);
    this.handleChange = this.handleChange;
    this.state =  {
        postalCode: ''
      }
  }

  
  getData() {
    
  }
  
  handleChange(e) {
    this.setState({postalCode: e.currentTarget.value});
    console.log(this.getState());
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Input Postal Code
          </a>
          
          <div>
            <input onChange={this.handleChange}></input>
          </div>
          <button>Get Weather</button>
        </header>
        
      </div>
    );
  }
}

export default Main;
