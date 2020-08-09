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
import makeSelectCulturalPlacesListPage from '../CulturalPlacesListPage/selectors';
import { getCulturalPlaceData } from '../CulturalPlacesListPage/actions';

export function CulturalPlacePage({culturalPlaceListPage, dispatch}) {
  useInjectReducer({ key: 'culturalPlacePage', reducer });
  useInjectSaga({ key: 'culturalPlacePage', saga });

  return (
    <div>
      <Helmet>
        <title>CulturalPlacePage</title>
        <meta name="description" content="Description of CulturalPlacePage" />
      </Helmet>
      <Navbar />
      <DescriptionCard
        data={culturalPlaceListPage}
        getCulturalPlaceData={data => dispatch(getCulturalPlaceData(data))}
      />
    </div>
  );
}

CulturalPlacePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  culturalPlacePage: makeSelectCulturalPlacePage(),
  culturalPlaceListPage: makeSelectCulturalPlacesListPage(),
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
