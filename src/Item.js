import React, { Component } from 'react'
import { Col } from 'reactstrap'
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

  clickVideo(url){
    // TODO: Something...IDK.
    // What happens on click?
    // Change main video?
    // Open new page?
    alert(url)
  }

  render() {
      const videoclip = (
        <Col xs="6" className="previewVideo"
        onMouseOver={this.playVideo.bind(this)}
        onMouseLeave={this.pauseVideo.bind(this)}
        onClick={this.clickVideo.bind(this, this.props.item.video)}>
          <video ref="vidRef" muted key={this.props.item.video} poster={this.props.item.poster} src={this.props.item.video}></video>
          <p align="center">{this.props.item.title}
            <br/>
            <span className="text-muted">{this.props.item.title}</span>
          </p>
        </Col>
      )
      const imageclip = (
        <Col xs="6" className="previewImage"
        onClick={this.clickVideo.bind(this, this.props.item.video)}>
          <img className="img-fluid" src={this.props.item.image} alt={this.props.item.title}/>
          <p align="center">{this.props.item.title}
            <br/>
            <span className="text-muted">{this.props.item.title}</span>
          </p>
        </Col>)

      return (
        this.props.item.component ? imageclip : videoclip
      )




  }

}

export default Item
