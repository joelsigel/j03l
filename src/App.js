import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Video from './Video';
import Footer from './Footer';

class App extends Component {
  render() {
    return [
      <Nav key={1} />,
      <Video key={2} />,
      <Footer key={3} />
    ]
  }
}

export default App;
