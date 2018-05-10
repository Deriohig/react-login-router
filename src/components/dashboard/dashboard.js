import React, { Component } from 'react';
import withAuthorization from '../withAuthorization';
import AuthUserContext from '../AuthUserContext';
import { db } from '../../firebase';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>The Dashboard is accessible by every signed in user.</p>
        
        <p>You are signed in as:  {userName}  </p>
       </div>
    );
  }
}


const userName = <AuthUserContext.Consumer>
  {authUser =>
       <span>{authUser ? authUser.email : ''}</span>
  }
</AuthUserContext.Consumer>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
