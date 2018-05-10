import React, { Component } from 'react';
import { auth } from '../../../firebase';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import { PasswordForgetLink } from '../password/password-forget.js';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSignin = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
    return (
        <div className='login home'>
          <form onSubmit={this.onSignin}>
            <h4> Login </h4>
            <div className='form-item'>
              <label htmlFor='email'>Email:</label>
              <input
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                 type='email'  name='email'/>
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password:</label>
              <input
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type='password'  name='password'/>
            </div>
            <div className='form-item'>
              <input disabled={isInvalid} type='submit' value='Login'/>
            </div>
             {error && <p className='error'>{error.message}</p>}
             <div className='form-item'>
               <PasswordForgetLink/>
             </div>
            <div className='form-item'>
              <p className='register-link'>
                Don't have an account?
                {' '}
                <Link to={routes.SIGN_UP}>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
    );
  }
}

export default withRouter(Login);
