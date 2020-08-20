/**
 *
 * CulturalPlacesListPage
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
import makeSelectCulturalPlacesListPage from './selectors';
import makeSelectHomePage from '../HomePage/selectors';
import { getCulturalPlaceDataSuccess } from './actions';
import reducer from './reducer';
import saga from './saga';
import Navbar from '../../components/Header';
import CulturalPlaceList from '../../components/CulturalPlaceList';
import './style.css';

export function CulturalPlacesListPage({ homePage, dispatch }) {
  useInjectReducer({ key: 'culturalPlacesListPage', reducer });
  useInjectSaga({ key: 'culturalPlacesListPage', saga });

  return (
    <div className="list-background">
      <div className="place-list-container">
        <Helmet>
          <title>Cultural Places List</title>
          <meta
            name="description"
            content="Description of CulturalPlacesListPage"
          />
        </Helmet>
        <Navbar />
        <CulturalPlaceList
          data={homePage}
          setFilterData={data => dispatch(getCulturalPlaceDataSuccess(data))}
        />
      </div>
    </div>
  );
}

CulturalPlacesListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  culturalPlacesListPage: makeSelectCulturalPlacesListPage(),
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

export default compose(withConnect)(CulturalPlacesListPage);

CulturalPlacesListPage.propTypes = {
  homePage: PropTypes.object,
};
