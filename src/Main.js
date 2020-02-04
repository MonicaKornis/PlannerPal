import React, {Component} from 'react'
import './App.css';
import logo from './logo.svg';

class Main extends Component {
  constructor(props)  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state =  {
        postalCode: null
      }
  }


  getData = async e => {
    const response = await fetch(`/api/weather?address=${this.state.postalCode}`, {
      method: 'GET'
    });
    const body = await response.json();
    this.setState({weather: body.forcast});

  };


  handleChange(e) {
    this.setState({postalCode: e.currentTarget.value});
  }

  handleSubmit() {
    this.getData();
  }

  render() {
    console.log(this.state);
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
          <button onClick={this.handleSubmit}>Get Weather</button>
        </header>

      </div>
    );
  }
}

export default Main;
