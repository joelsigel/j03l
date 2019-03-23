import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleWide } from '@fortawesome/pro-light-svg-icons/faRectangleWide';
library.add(faRectangleWide)



class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="2">&lt;/J03L&gt;</Col>
          <Col xs="8"></Col>
          <Col xs="2" align="right"><FontAwesomeIcon icon={faRectangleWide} size="2x" /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
