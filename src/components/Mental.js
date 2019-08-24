import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Arrow from './res/arrow-01.png'
import {Link} from 'react-router-dom'
import MentalGif1 from './res/mental1.gif'

const Mental = () => {
  return(
    <div className="container">
      <Row>
        <Col sm={2}>
          <Link className="link-no-underline" to='/'><img className="arrow" src={Arrow} alt="arrow"/></Link>
        </Col>
        <Col sm={10}>
          <h3 className="home-header"><span className="bold-text">Mental:</span> A web app for creating a personal mental health toolkit</h3>
        </Col>
      </Row>
      <Row className="home-top-image-row">
        <h4>Mental was created in 4 days for a "Stackathon" project. Firebase and Firestore are utilized to create a cloud storage database. Redux thunks contribute to setting the error and loading states of this app. Users have the ability to login, logout, edit and delete their accounts. Additionally, one can add, update, and delete items from their toolkit.</h4>
        <h4 className="project-tech"><span className="bold-text">Technology used:</span> React.js, Redux, Firebase, Firestore, Formik, Yup, Styled Components, React-Bootstrap</h4>
      </Row>
      <div className="project-tech bold-center-links">
        <Row className="project-link-space-top">
          <Col sm={6}>
             <a href="https://mental-toolkit.herokuapp.com" target="_blank" rel="noopener noreferrer">Deployed Link</a>
          </Col>
           <Col>
            <a href="https://github.com/cfilipek/mental-toolkit" target="_blank" rel="noopener noreferrer">Github Link</a>
          </Col>
        </Row>
      </div>
      <Row className="home-top-image-row">
        <Col className="project-center-image">
          <img className="mental-gif" src={MentalGif1} alt="website gif 1"/>
        </Col>
      </Row>
      <div className="spacer"></div>
    </div>
  )
}

export default Mental
