import React, { Component } from 'react';

import { auth } from '../../../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div className='form-holder'>
        <form onSubmit={this.onSubmit}>
          <h4>Change Password</h4>
          <div className='form-item'>
            <label htmlFor='password'>Password: </label>
            <input
              name='password'
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              type="password"
              placeholder="New Password"
            />
        </div>
          <div className='form-item'>
          <label htmlFor='password2'>Confirm Password: </label>
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            name='password2'
            placeholder="Confirm New Password"
          />
        </div>
        <div className='form-item'>
          <button disabled={isInvalid} type="submit">
            Reset My Password
          </button>
        </div>

        { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

export default PasswordChangeForm;
