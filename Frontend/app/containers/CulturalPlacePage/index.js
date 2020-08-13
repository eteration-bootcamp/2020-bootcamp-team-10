/**
 *
 * CulturalPlacePage
 *
 */

import React, { useEffect, useState } from 'react';
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
import Header from '../../components/Header';
import DescriptionCard from '../../components/DescriptionCard';
import makeSelectCulturalPlacesListPage from '../CulturalPlacesListPage/selectors';
import makeSelectLoginPage from '../LoginPage/selectors';
import { getCulturalPlaceData } from '../CulturalPlacesListPage/actions';
import { getDataWithId } from './actions';
import './style.css';

export function CulturalPlacePage({
  loginPage,
  culturalPlaceListPage,
  dispatch,
  culturalPlacePage,
}) {
  useInjectReducer({ key: 'culturalPlacePage', reducer });
  useInjectSaga({ key: 'culturalPlacePage', saga });

  // useEffect(() => {
  //   // dispatch(getDataWithId('1'));
  //   const { id } = props.params.cityId;

  //   dispatch(getDataWithId(id));
  // }, {});

  return (
    <div className="culturalPlacePage-background">
      <div>
        <Helmet>
          <title>CulturalPlacePage</title>
          <meta name="description" content="Description of CulturalPlacePage" />
        </Helmet>
        <Header authData={loginPage} />
        <div className="culturalPlacePage-background-black">
          <DescriptionCard
            // placeDataWithId={data => dispatch(getDataWithId(data))}
            data={culturalPlaceListPage}
            getCulturalPlaceData={data => dispatch(getCulturalPlaceData(data))}
          />
        </div>
      </div>
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

export default compose(withConnect)(CulturalPlacePage);
