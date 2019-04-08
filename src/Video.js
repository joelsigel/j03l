import React, { Component } from 'react'
import './Video.css';
import video from './test.mp4';

class Video extends Component {

  render(){
    return [
      <video autoPlay loop muted src={video}></video>
      // <video autoPlay loop muted src="http://joelsigel.com/mock-404/assets/videos/342932613.mp4"></video>
    ]
  }
}

export default Video
