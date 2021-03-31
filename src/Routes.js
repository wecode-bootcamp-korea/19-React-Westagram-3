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

import Loginseok from './pages/minseokseo/Login/Login';
import Mainseok from './pages/minseokseo/Main/Main';

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/loginjun" component = {LoginJun} />
          <Route exact path="/mainjun" component={MainJun} />
          <Route exact path="/loginhyo" component = {LoginHyo} />
          <Route exact path="/mainhyo" component={MainHyo} />
          <Route exact path="/loginseok" component = {Loginseok} />
          <Route exact path="/mainseok" component={Mainseok} />
        </Switch>
      </Router>
    )
  }
}
export default Routes;