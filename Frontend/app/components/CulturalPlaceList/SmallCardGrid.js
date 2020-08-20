import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonToggle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SmallCardGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.placeData.map((value,index) => (
            <Grid key={index} item>
              <div>
                <div className="card-container">
                  <Card className="smallInfoCard">
                    <div className="card-photo-container">
                      <CardImg
                        className="cardimage"
                        top
                        width="100%"
                        src={value.cityPhoto1}
                        alt="Card image cap"
                      />
                    </div>
                    <CardBody>
                      <CardTitle className="smallInfoCardTitle">
                        {value.culturalPlace}
                      </CardTitle>
                      <CardSubtitle className="smallInfoCardSubTitle">
                        {value.cityName}
                      </CardSubtitle>
                      <CardText className="smallInfoCardDescription">
                        {value.cityDescription.substring(0, 260)}...
                      </CardText>
                      <ButtonToggle className="cardButton">
                        <Link
                          className="link"
                          to={`/cultural-place/${value.cityId}`}
                        >
                          <span className="button-text">Learn more..</span>
                        </Link>
                      </ButtonToggle>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
}

SmallCardGrid.propTypes = {
  placeData: PropTypes.array,
};