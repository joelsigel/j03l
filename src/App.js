import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Nav from './Nav';

class App extends Component {
  render() {
    return [
      <Nav />,
      <Container>
        <Row>
          <Col xs="12">Content Test</Col>
        </Row>
      </Container>
    ]
  }
}

export default App;
