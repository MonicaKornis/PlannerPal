import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Explore from './Explore';
import HomePage from  './HomePage';
import NavBar from  './NavBar';
import * as serviceWorker from './serviceWorker';
import {
  ReactRouter,
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={Main}/>
    <Route exact path='/home' component={HomePage}/>
    <Route path={['/home', '/destinations']} component={NavBar}/>
    <Route exact path='/destinations' component={Explore}/>
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
