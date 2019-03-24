import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Nav.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleWide } from '@fortawesome/pro-light-svg-icons/faRectangleWide';
library.add(faRectangleWide)

class Nav extends Component {

  render(){
    return [
      <Container className="navigation">
        <Row>
          <Col className="logo" xs="2">&lt;/J03L&gt;</Col>
          <Col xs="8"></Col>
          <Col xs="2" className="menu" align="right">
            <FontAwesomeIcon icon={faRectangleWide} size="2x" />
          </Col>
        </Row>
      </Container>
    ]
  }
}

export default Nav
