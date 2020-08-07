/**
 *
 * CulturalPlacePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCulturalPlacePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Navbar from '../../components/Header/Navbar';
import DescriptionCard from '../../components/DescriptionCard';

export function CulturalPlacePage() {
  useInjectReducer({ key: 'culturalPlacePage', reducer });
  useInjectSaga({ key: 'culturalPlacePage', saga });

  return (
    <div>
      <Helmet>
        <title>CulturalPlacePage</title>
        <meta name="description" content="Description of CulturalPlacePage" />
      </Helmet>
      <Navbar />
      <DescriptionCard />
    </div>
  );
}

CulturalPlacePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  culturalPlacePage: makeSelectCulturalPlacePage(),
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

export default compose(withConnect)(CulturalPlacePage);
