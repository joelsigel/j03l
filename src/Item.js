import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Item.css'

class Item extends Component {

  constructor() {
    super();
    this.state = {
      video: false,
    }
  }

  playVideo(){
    this.refs.vidRef.play();
  }

  pauseVideo(){
    this.refs.vidRef.pause();
  }

  render() {

      return (
        <Col xs="6" onMouseOver={this.playVideo.bind(this)} onMouseLeave={this.pauseVideo.bind(this)}>
          <video className="previewVideo" ref="vidRef" muted key={this.props.item.video} poster={this.props.item.poster} src={this.props.item.video}></video>
          <p>{this.props.item.name}</p>
        </Col>
      )
  }

}

export default Item
