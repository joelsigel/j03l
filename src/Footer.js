import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends Component {

  render(){
    return [
      <footer className="footer" key={5} >
        <Container>
          <Row>
            <Col xs="12">
              <p className="subtitle">Buick | <span className="text-muted">430 V8</span></p>
              <h2>Riviera</h2>
              <p className='description'>Sometimes somethings surprise someone so stupidly, steven scientifically switches subliminal sides.</p>
              <button className="loadpage in">
                <span>Something!!</span>
                <div class="left"></div>
                <div class="top"></div>
                <div class="right"></div>
                <div class="bottom"></div>
              </button>
            </Col>
          </Row>
        </Container>
      </footer>
    ]
  }
}

export default Footer
