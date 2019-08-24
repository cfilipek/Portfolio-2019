import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Grace from './components/Grace';
import TCY from './components/TCY';
import Mental from './components/Mental';


class Routes extends Component {

  render() {


    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/grace-in-space" component={Grace}/>
        <Route path="/tcy-jewelry" component={TCY}/>
        <Route exact path="/mental" component={Mental}/>
      </Switch>
    )
  }
}

export default Routes
