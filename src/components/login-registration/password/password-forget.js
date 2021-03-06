import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../../firebase';

const PasswordForgetPage = () => <div>
  <h1>PasswordForget</h1>
  <PasswordForgetForm/>
</div>

const byPropKey = (propertyName, value) => () => ({[propertyName]: value});

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onSubmit = (event) => {
    const {email} = this.state;

    auth.doPasswordReset(email).then(() => {
      this.setState(() => ({
        ...INITIAL_STATE
      }));
    }).catch(error => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  render() {
    const {email, error} = this.state;

    const isInvalid = email === '';

    return (
      <div className='form-holder'>
        <form onSubmit={this.onSubmit}>
          <h4>Forgotten Password</h4>
          <div className='form-item'>
            <input value={this.state.email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="email" placeholder="Email Address"/>
          </div>
          <div className='form-item'>
            <button disabled={isInvalid} type="submit">
              Reset My Password
            </button>
          </div>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => <div className='form-item'>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>
</div>

export default PasswordForgetPage;

export {PasswordForgetForm, PasswordForgetLink};
