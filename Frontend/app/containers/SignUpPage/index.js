/**
 *
 * SignUpPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignUpPage from './selectors';
import makeSelectLoginPage from '../LoginPage/selectors';
import reducer from './reducer';
import saga from './saga';
import SignUpForm from '../../components/SignUpForm';
import Header from '../../components/Header';
import { getAuthenticationData } from '../LoginPage/actions';
import './style.css';

export function SignUpPage({ loginPage, dispatch }) {
  useInjectReducer({ key: 'signUpPage', reducer });
  useInjectSaga({ key: 'signUpPage', saga });
  return (
    <div className="sign-up-background">
      <Helmet>
        <title>SignUpPage</title>
        <meta name="description" content="Description of SignUpPage" />
      </Helmet>
      <Header authData={loginPage} />
      <SignUpForm />
    </div>
  );
}

SignUpPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signUpPage: makeSelectSignUpPage(),
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignUpPage);

SignUpPage.propTypes = {
  loginPage: PropTypes.object,
};
