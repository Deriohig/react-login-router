import React from 'react';

import AuthUserContext from '../../AuthUserContext';
import PasswordChangeForm from '../password/password-change.js';
import withAuthorization from '../../withAuthorization';

const Account = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser ? authUser.email : ''}</h1>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>;

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Account);
