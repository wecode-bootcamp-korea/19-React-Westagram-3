import React from 'react';
import {Link} from 'react-router-dom';

class Test extends React.Component{
  render() {
    return(
      <>
      <h1>안녕 3팀 !! </h1>
      <Link to="/loginjun">준형님</Link>
      <Link to="/loginhyo">효진님</Link>
      <Link to="/loginseok">서민석</Link>
      <Link to="/logineun">성은님</Link>
      </>
    )
  }
}


export default Test;