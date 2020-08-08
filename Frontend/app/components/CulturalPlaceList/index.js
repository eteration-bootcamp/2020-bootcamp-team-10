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
    let result;
    if (this.props.noFoundMessage) {
      result = <div>{this.props.noFoundMessage}</div>;
    } else if(this.props.undefinedMessage) {
      result = <div>{this.props.undefinedMessage}</div>;
    } else {
      result = (
        <div>
          {this.props.fiteredPlaceList.map((place, i) => (
            <div key={i}>
              <SmallInfoCard placeListData={place} />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        {this.props.fiteredPlaceList}, filteredPlaceList is not undefined }
        {result}
      </div>
    );
  }
}

CulturalPlaceList.propTypes = {
  fiteredPlaceList: PropTypes.array,
  noFoundMessage: PropTypes.string,
  undefinedMessage: PropTypes.string,
};

export default CulturalPlaceList;
