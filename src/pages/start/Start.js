import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <>
        <div>
          <Link to ="/loginhyo"><button type="button">효진님</button></Link>
          <Link to ="/logineun"><button type="button">성은님</button></Link>
          <Link to ="/loginseok"><button type="button">민석님</button></Link>
          <Link to ="/loginjun"><button type="button">준형님</button></Link>
        </div>
      </>
    );
  }
}

export default Start;