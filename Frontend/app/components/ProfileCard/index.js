/**
 *
 * ProfileCard
 *
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

function ProfileCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>Profile Page</CardTitle>
        <CardText>
          {props.userInfo.userProfile[0].firstName}{' '}
          {props.userInfo.userProfile[0].lastName}
        </CardText>
      </CardBody>
    </Card>
  );
}
export default ProfileCard;

ProfileCard.propTypes = {
  userInfo: PropTypes.object,
};
