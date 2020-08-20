/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import CulturalPlacePage from '../CulturalPlacePage';
import CulturalPlacesListPage from '../CulturalPlacesListPage';
import ProfilePage from '../ProfilePage';
import history from './history';
import createStore from "../../configureStore";

export default function App() {
  let store = createStore();
  return (
    <div>
       <Router history={history}>
      <Switch store={store}>
       
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/cultural-place/:id"  strict
        sensitive
        render={({ match }) => {
          return match ? <CulturalPlacePage match={match} /> : <NotFound />
        }}/>
        <Route
          exact
          path="/cultural-place-list"
          component={CulturalPlacesListPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}