// 준형
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginJun from './pages/junhyeongchae/Login/Login';
import MainJun from './pages/junhyeongchae/Main/Main';

import LoginHyo from './pages/hyojinkim/Login/Login';
import MainHyo from './pages/hyojinkim/Main/Main';

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component = {LoginJun} />
          <Route exact path="/main" component={MainJun} />
          <Route exact path="/loginhyo" component = {LoginHyo} />
          <Route exact path="/mainhyo" component={MainHyo} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;