import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { formatter } from '../helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 800,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: '100%',
  },
  spinner: {
    margin: 'auto',
    marginTop: '10%',
  },
  marker: {
    color: red[500],
    fontSize: '2rem',
    cursor: 'pointer',
  },
}));

export default function Map({
  status = 'idle',
  data = undefined,
  error = null,
  isFetching = false,
  setShowList = () => false,
  zip = '',
}) {
  const classes = useStyles();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLong] = useState(null);
  const [totalClaims, setTotalClaims] = useState(0);
  const [buildingPaid, setBuildingPaid] = useState(0);
  const [contentsPaid, setContentsPaid] = useState(0);

  const getTotalNClaims = (data) =>
    data.reduce((total, claim) => (total += Number(claim.n)), 0);

  const getTotalBuildingPaid = (data) =>
    data
      .filter((claim) => !isNaN(Number(claim.amountPaidOnBuildingClaim)))
      .reduce(
        (total, claim) => (total += Number(claim.amountPaidOnBuildingClaim)),
        0
      )
      .toFixed(2);

  const getTotalContentsPaid = (data) =>
    data
      .filter((claim) => !isNaN(Number(claim.amountPaidOnContentsClaim)))
      .reduce(
        (total, claim) => (total += Number(claim.amountPaidOnContentsClaim)),
        0
      )
      .toFixed(2);

  const fetchCityCoordinates = async (zip) => {
    const resp = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GMAPS_KEY}&components=postal_code:${zip}`
    );
    const coordinates = resp?.data?.results[0]?.geometry?.location;
    if (coordinates) {
      setLat(coordinates?.lat);
      setLong(coordinates?.lng);
    }
  };

  useEffect(() => {
    if (status === 'success' && data?.data.length > 0) {
      fetchCityCoordinates(zip);
      setTotalClaims(getTotalNClaims(data?.data));
      setBuildingPaid(getTotalBuildingPaid(data?.data));
      setContentsPaid(getTotalContentsPaid(data?.data));
    }
  }, [status, zip, data]);

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      cursor: 'pointer',
    },
  }))(Tooltip);

  const pinClickHandler = () => {
    setShowList(true);
    setIsTooltipOpen((flag) => !flag);
  };

  const Marker = ({ text }) => (
    <HtmlTooltip
      interactive
      open={isTooltipOpen}
      placement="top"
      title={
        <>
          <Typography color="primary">{text}</Typography>
          {`Total claims: ${totalClaims}`}
          <br></br>
          {`Total Paid On Building Claims: ${formatter.format(buildingPaid)}`}
          <br></br>
          {`Total Paid On Contents Claims: ${formatter.format(contentsPaid)}`}
          <Typography color="secondary">
            <Button
              style={{ textTransform: 'capitalize' }}
              color="secondary"
              onClick={pinClickHandler}
            >
              Click here to see all claim details
            </Button>
          </Typography>
        </>
      }
    >
      <RoomIcon
        onClick={() => setIsTooltipOpen((flag) => !flag)}
        className={classes.marker}
      />
    </HtmlTooltip>
  );

  // const handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  // };

  if (isFetching)
    return (
      <CircularProgress size={80} thickness={3.0} className={classes.spinner} />
    );

  if (error) return <Paper>{'An error has occurred: ' + error.message}</Paper>;

  return (
    <Grid item sm={7} xs={12} className={classes.root}>
      <Paper className={classes.paper}>
        {lat && lng ? (
          <GoogleMapReact
            defaultZoom={13}
            center={{ lat, lng }}
            defaultCenter={{ lat, lng }}
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
            // READ DOCS ON THESE 2 PROPS
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <Marker lat={lat} lng={lng} text="Overview" />
          </GoogleMapReact>
        ) : (
          <Typography>Please enter an address to search for claims</Typography>
        )}
      </Paper>
    </Grid>
  );
}
