import React, {Component} from 'react';
import { auth,db } from '../../../firebase';
import {  withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  registerUser = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;
    const {
      history,
      } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        db.doCreateUser(authUser.user.uid, authUser.user.email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            alert('failed');
            this.setState(byPropKey('error', error));
          });

      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }
  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ;
    return (
      <div className='register home'>
        <form onSubmit={this.registerUser}>
          <h4> Register </h4>
          <div className='form-item'>
            <label htmlFor='email'>Email:</label>
            <input
              onChange={event => this.setState(byPropKey('email', event.target.value))}
               value={email} type='text' name='email'/>
          </div>
          <div className='form-item'>
            <label htmlFor='password'>Password:
            </label>
            <input
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              value={passwordOne} type='password' name='password'/>
          </div>
          <div className='form-item'>
            <label htmlFor='password-verify'>Verify Password:</label>
            <input value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              type='password' name='password-verify'/>
          </div>
          <div className='form-item'>
            <input disabled={isInvalid} type='submit'/>
          </div>

          {error && <p className='error'>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
