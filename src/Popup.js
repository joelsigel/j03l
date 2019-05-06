import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Popup.css'
import Item from './Item'

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <Container>
            <Row>
              <Col xs="8">
                <h1>{this.props.text}</h1>
              </Col>
              <Col xs="4" align="right">
                <button onClick={this.props.closePopup}>X</button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
                {
                  this.props.steps.map((item, key, count) =>
                  <Item item={item} key={item.id} />)
                }
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Popup
