import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import './Footer.css';

class Footer extends Component {

  render(){
    return [
      <footer className="footer">
        <Container>
          <Row>
            <Col xs="12">
              <p className="subtitle">Something | <span className="text-muted">Something</span></p>
              <h2>Something & Something</h2>
              <p>Something with something else might make something more.</p>
              <Button color="danger">Danger!</Button>
            </Col>
          </Row>
        </Container>
      </footer>
    ]
  }
}

export default Footer
