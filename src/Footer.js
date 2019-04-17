import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import './Footer.css';

class Footer extends Component {

  render(){
    return [
      <footer className="footer" key={5} >
        <Container>
          <Row>
            <Col xs="12">
              <p className="subtitle">Something | <span className="text-muted">03/25/2019</span></p>
              <h2>Something</h2>
              <p className='description'>Sometimes somethings surprise someone so stupidly, steven scientifically switches subliminal sides.</p>
              <Button color="white">Something!</Button>
            </Col>
          </Row>
        </Container>
      </footer>
    ]
  }
}

export default Footer
