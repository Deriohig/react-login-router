import React from 'react';
import Login from './components/login-registration/login/login.js'
import Register from './components/login-registration/registration/register.js'
import Account from './components/login-registration/account/account.js'
import Landing from './components/landing/landing.js'
import Dashboard from './components/dashboard/dashboard.js'
import PwForget from './components/login-registration/account/password-forget-page.js'
import Navigation from './components/header/navigation.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import withAuthentication from './components/withAuthentication';

import * as routes from './constants/routes';

const App = () =><Router>
        <div className="App">

          <Navigation/>


          <Route
            exact path={routes.SIGN_UP}
            component={() => <Register />}
          />
          <Route
            exact path={routes.LANDING}
            component={() => <Landing/ >}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <Login />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PwForget />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <Dashboard />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <Account />}
          />
        </div>
      </Router>;


export default withAuthentication(App);
