/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import makeSelectLoginPage from '../../containers/LoginPage/selectors';

function Header({ props, loginPage }) {
  return (
    <div>
      <NavBar isLogin={loginPage} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(Header);
