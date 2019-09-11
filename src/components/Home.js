import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import mentalHome from './res/mental-home.png'
import graceHome from './res/grace-home.png'
import tcyHome from './res/tcy-home.png'


const Home = () => {
  return(
      <div className="container">
        <Row>
          <Col>
            <h3 className="home-header"><span className="bold-text">Claire Filipek</span> is a NYC based web developer, designer, and fine artist; intent on building beautiful applications with excellent user experiences.</h3>
            <h3 className="home-header header-top"><a href = "mailto: claireflpk@gmail.com">Get in touch <i class="fas fa-envelope-open-text"></i></a></h3>
          </Col>
        </Row>
        <Row className="links-space-top">
          <Col className="link-size center-small-link" sm={3}>
            <a  href="https://github.com/cfilipek" target="_blank" rel="noopener noreferrer" ><i class="fab fa-github"></i> Github</a>
          </Col>
          <Col className="link-size center-link" sm={3}>
            <a className="center-link" href="https://www.linkedin.com/in/cfilipek/" target="_blank" rel="noopener noreferrer" ><i class="fab fa-linkedin"></i> LinkedIn</a>
          </Col>
          <Col className="link-size center-link" sm={3}>
            <a className="right-align-link" href="http://clairefilz.com/" target="_blank" rel="noopener noreferrer" ><i class="fas fa-palette"></i> Fine Art Website</a>
          </Col>
          <Col className="link-size right-align-link" sm={3}>
            <a  href="https://medium.com/@iloveclair" target="_blank" rel="noopener noreferrer" ><i class="fab fa-medium"></i> Blog Posts</a>
          </Col>
        </Row>
        <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/mental">
              <h4 className="home-image-title">01 Mental Health Toolkit</h4>
              <img className="home-mental image-hover" alt="mental website thumbnail" src={mentalHome} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <Row className="home-top-image-row">
          <Col sm={6}>
          </Col>
         <Col className="col-hover" sm={6}>
            <Link to="/tcy-jewelry">
              <h4 className="home-image-title right-side">02 TCY Jewelry</h4>
              <img className="home-mental image-hover" alt="tcy website thumbnail" src={tcyHome} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="home-top-image-row">
          <Col className="col-hover" sm={6}>
            <Link to="/grace-in-space">
              <h4 className="home-image-title">03 Grace In Space</h4>
              <img className="home-grace image-hover" alt="grace in space app thumbnail" src={graceHome} />
              <div class="overlay">
                <div class="text">Learn more -></div>
              </div>
            </Link>
          </Col>
          <Col sm={6}></Col>
        </Row>
        <div className="spacer"></div>
      </div>
  )
}

export default Home
