/**
 *
 * CulturalPlaceList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SmallInfoCard from '../SmallInfoCard';

// import styled from 'styled-components';
// eslint-disable-next-line react/prefer-stateless-function
class CulturalPlaceList extends React.Component {
  render() {
    console.log(this.props.fiteredPlaceList, 'Props Debug filtered list');
    return (
      <div>
        {' '}
        {/* {this.props.filteredPlaceList}, filteredPlaceList is not undefined */}
        {/* {data.map((place, i) => (
        <div key={i}>
          <SmallInfoCard placeListData={place} />
        </div>
      ))} */}
      </div>
    );
  }
}

CulturalPlaceList.propTypes = {
  fiteredPlaceList: PropTypes.array,
};

export default CulturalPlaceList;
