import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { Container, Row, Col } from 'reactstrap';
import './Video.css';
import video from './buick.mp4';
// import image from '.assets/placeholder.jpg';


class Video extends Component {

  renderContent = () => {
    if (isMobile) {
        return <Container><Row><Col xs="12">This content is unavailable on mobile</Col></Row></Container>
    }
    return <video autoPlay loop muted src={video}></video>
  }

  render(){
    return this.renderContent();
  }
}

export default Video
