/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Header from '../../components/Header';
import makeSelectLoginPage from './selectors';
import { setAuthenticationSuccess, setUserNameSuccess, getUserDataSuccess } from './actions';
import reducer from './reducer';
import saga from './saga';
import './style.css';

import LoginForm from '../../components/LoginForm';

export function LoginPage({ loginPage, dispatch }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  return (
    <div className="login-background">
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Header authData={loginPage} />
      <LoginForm
        userInfo={loginPage}
        setAuth={data => dispatch(setAuthenticationSuccess(data))}
        setUserName={data => dispatch(setUserNameSuccess(data))}
        setUserProfile={data => dispatch(getUserDataSuccess(data))}
      />
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
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
)(LoginPage);
