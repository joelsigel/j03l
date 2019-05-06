import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

//
// NOTE: css imports
//
import './Nav.css'

//
// NOTE: asset imports
//
import video from './buick.mp4'
import poster from './buick.jpg'

//
// NOTE: class imports
//
import Popup from './Popup'
import Item from './Item'

//
// NOTE: addon imports
//
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleWide } from '@fortawesome/pro-light-svg-icons/faRectangleWide'
library.add(faRectangleWide)

class Nav extends Component {

  constructor() {
    super()
    this.state = {
      showPopup: false,
      steps: [
        {
          id: 11, name: 'commerical', poster: poster, video: video
        },
        {
          id: 42, name: 'transmission', poster: poster, video: video
        },
        {
          id: 72, name: 'alternator', poster: poster, video: video
        }
      ]
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render(){

    return [
      <Container className="navigation" key={4} >
        <Row>
          <Col className="logo" xs="2">&lt;/J03L&gt;</Col>
          <Col xs="8"></Col>
          <Col xs="2" className="menu" align="right">
            <FontAwesomeIcon
            onClick={this.togglePopup.bind(this)}
            className="menuButton"
            icon={faRectangleWide}
            size="2x" />
          </Col>
          <Col xs="12">
            {
              this.state.showPopup ?
              <Popup
                text="67' Riviera"
                steps={this.state.steps}
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </Col>
        </Row>
      </Container>
    ]
  }
}

export default Nav
