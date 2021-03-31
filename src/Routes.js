import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginJun from './pages/junhyeongchae/Login/Login';
import MainJun from './pages/junhyeongchae/Main/Main';

class Routes extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component = {LoginJun} />
          <Route exact path="/main" component={MainJun} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
