/**
 *
 * HomePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getAllData, setFilteredSearchDataSuccess } from './actions';
import Header from '../../components/Header';
import Search from '../../components/Search';
import CommentMain from '../../components/Comment';
import './style.css';

export function HomePage({ homePage, dispatch }) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <>
      <div className="backgraound-home">
        <Header />
        <Search
          data={homePage}
          setFilterData={data => dispatch(setFilteredSearchDataSuccess(data))}
        />
        {/* <CommentMain /> */}
      </div>
    </>
  );
}
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
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
)(HomePage);
