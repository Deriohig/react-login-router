import React from 'react';

import {Link} from 'react-router-dom';

import SignOutButton from '../login-registration/signout/signout-button.js';
import AuthUserContext from '../AuthUserContext';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <div className='navigation-bar'>
    <AuthUserContext.Consumer>
          {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
          }
    </AuthUserContext.Consumer>
  </div>;

const NavigationAuth = () =>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li><SignOutButton/></li>
      </ul>;

const NavigationNonAuth = () =>
   <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SIGN_UP}>Register</Link>
    </li>
  </ul>;

export default Navigation;
