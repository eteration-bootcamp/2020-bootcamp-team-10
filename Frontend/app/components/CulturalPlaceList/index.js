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
    let result;
    if (this.props.noFoundMessage) {
      result = <div>{this.props.noFoundMessage}</div>;
    } else if (this.props.undefinedMessage) {
      result = <div>{this.props.undefinedMessage}</div>;
    } else {
      result = (
        <div>
          {this.props.data.filteredPlaces.map((place, i) => (
            <div key={i}>
              <SmallInfoCard placeListData={place} />
            </div>
          ))}
        </div>
      );
    }

    return <div>{result}</div>;
  }
}

CulturalPlaceList.propTypes = {
  noFoundMessage: PropTypes.string,
  undefinedMessage: PropTypes.string,
};

export default CulturalPlaceList;
