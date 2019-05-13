import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { Container, Row, Col } from 'reactstrap';
import './Video.css';
import video from './buick.mp4';


class Video extends Component {

  renderContent = (props) => {
    if (isMobile) {
        return <Container><Row><Col xs="12">This content is unavailable on mobile</Col></Row></Container>
    }
    return <video ref="main" className="mainVideo" autoPlay loop muted src={video}></video>
  }

  render(props){
    return this.renderContent();
  }
}

export default Video
