import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Arrow from './res/arrow-01.png'
import {Link} from 'react-router-dom'
import TCYImage from './res/tcy.png'

const TCY = () => {
  return(
    <div className="container">
      <Row>
        <Col sm={2}>
          <Link className="link-no-underline" to='/'><img className="arrow" src={Arrow} alt="arrow"/></Link>
        </Col>
        <Col sm={10}>
          <h3 className="home-header"><span className="bold-text">TCY Jewelry:</span> A web app created to sell 3D printed Jewelry</h3>
        </Col>
      </Row>
      <Row className="home-top-image-row">
        <h4>TCY Jewelry was a group project with the goal of creating an ecommerce website. I developed front-end design utilizing Bootstrap and Reactstrap, assisted in creating Sequelize models and associations, and implemented Nodemailer custom email capabilities.</h4>
        <h4 className="project-tech"><span className="bold-text">Technology used:</span> React, Redux, Express, Sequelize, Nodemailer, React-Bootstrap, Reactstrap</h4>
      </Row>
      <div className="project-tech bold-center-links">
        <Row className="project-link-space-top">
          <Col sm={6}>
             <a href="https://tcy-jewelry.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Link</a>
          </Col>
           <Col>
            <a href="https://github.com/grace-shopper-asos/Asos" target="_blank" rel="noopener noreferrer">Github Link</a>
          </Col>
        </Row>
      </div>
      <Row className="home-top-image-row">
        <Col className="project-center-image">
          <img className="project-image-resize" src={TCYImage} alt="TCY shop page"/>
        </Col>
      </Row>
      <div className="spacer"></div>
  </div>
  )
}

export default TCY
