/**
 *
 * CulturalPlaceList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, CardDeck } from 'reactstrap';
import SmallInfoCard from '../SmallInfoCard';
import './style.css';
import SmallCardGrid from './SmallCardGrid';
// import styled from 'styl./SmallCardGrid
// eslint-disable-next-line react/prefer-stateless-function
class CulturalPlaceList extends React.Component {
  render() {
    console.log(this.props.data.filteredPlaces, 'data flow');
    let result;
    if (this.props.noFoundMessage) {
      result = <div>{this.props.noFoundMessage}</div>;
    } else if (this.props.undefinedMessage) {
      result = <div>{this.props.undefinedMessage}</div>;
    } else {
      result = (
        <div>
          <div>
            <SmallCardGrid
              placeData={this.props.data.filteredPlaces}
              setFilterData={data => this.props.setFilterData(data)}
            />
          </div>
          {this.props.data.filteredPlaces.map((place, i) => (
            <div key={i}>
              {/* <CardDeck>
                <SmallInfoCard
                  placeListData={place}
                  setFilterData={data => this.props.setFilterData(data)}
                />
              </CardDeck> */}
              <div className="parent">
                {/* <SmallInfoCard
                  placeListData={place}
                  setFilterData={data => this.props.setFilterData(data)}
                /> */}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return <div className="resultClass">{result}</div>;
  }
}

CulturalPlaceList.propTypes = {
  data: PropTypes.object,
  setFilterData: PropTypes.func,
  noFoundMessage: PropTypes.string,
  undefinedMessage: PropTypes.string,
};

export default CulturalPlaceList;