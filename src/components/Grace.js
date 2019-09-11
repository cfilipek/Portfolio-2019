import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Arrow from './res/arrow-01.png'
import {Link} from 'react-router-dom'
import graceGif from './res/grace2.gif'
import wireframe from './res/mobile-wireframe.png'

const Grace = () => {
  return(
    <div className="container">
      <Row>
        <Col sm={2}>
          <Link className="link-no-underline" to='/'><img className="arrow" src={Arrow} alt="arrow"/></Link>
        </Col>
        <Col sm={10}>
          <h3 className="home-header"><span className="bold-text">Grace in Space:</span> A VR mobile game app</h3>
        </Col>
      </Row>
      <Row className="home-top-image-row">
        <h4>The goal of the app is to help an elderly alien named grace, who drops her bag and loses her belongings, collect all her belongings in a virtual reality space scene. Wherein the user clicks on the screen to collect the items in a given timeframe. I contributed greatly to the Front-end; by working on the styling, creating 3D objects and images for the app.<br/><br/> In addition, I worked on functionalities such as the ability to navigate from static pages to the VR scene, as well as applying a static footer in the VR scene, and creating loading states to wait for large image files to appear before loading pages in fully.</h4>
        <h4 className="project-tech"><span className="bold-text">Technology used:</span> React-Native, Viro React, Redux, Firebase, Firestore</h4>
      </Row>
      <div className="project-tech bold-center-links">
        <Row className="project-link-space-top">
          <Col sm={6}>
             <a href="https://www.youtube.com/watch?v=Tg7BLim7ues&list=PLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs&index=6&t=0s" target="_blank" rel="noopener noreferrer">Video Link</a>
          </Col>
           <Col>
            <a href="https://github.com/graceinspace/graceInSpace" target="_blank" rel="noopener noreferrer">Github Link</a>
          </Col>
        </Row>
      </div>
      <Row className="home-top-image-row">
        <Col className="project-center-image">
          <img src={graceGif} alt="Grace gif"/>
        </Col>
      </Row>
      <Row className="home-top-image-row">
        <Col className="project-center-image">
          <img className="project-image-resize" src={wireframe} alt="wireframes"/>
        </Col>
      </Row>
      <div className="spacer"></div>
  </div>
  )
}

export default Grace
