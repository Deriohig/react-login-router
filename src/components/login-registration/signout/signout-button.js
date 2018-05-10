import React, {Component} from 'react';
import { auth } from '../../../firebase';

class SignOutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut(){
    auth.doSignOut();
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.signOut}
      >
        Sign Out
      </button>
    );
  }
}


export default SignOutButton;
