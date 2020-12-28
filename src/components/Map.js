import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import GoogleMapReact from 'google-map-react';

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
    width: '100%'
  },
  spinner: {
    margin: 'auto',
    marginTop: '10%',
  },
  marker: {
    color: red[500],
    fontSize: '2rem'
  }
}));

export default function Map({ status = 'idle', data = undefined, error = null, 
  isFetching = false, setShowList = () => false 
}) {
  const classes = useStyles();
  const [lat, setLat] = useState(null)
  const [lng, setLong] = useState(null)

  useEffect(() => {
    if(status === 'success' && data?.data.length > 0) {
      setLat(Number(data?.data[0]?.latitude))
      setLong(Number(data?.data[0]?.longitude))
    }
  }, [status, data])

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      // backgroundColor: '#f5f5f9',
      // color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const Marker = ({ text }) => (
    <HtmlTooltip placement="top" arrow
      title={
        <>
          <Typography color="inherit">{text}</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </>
      }
    >
      <RoomIcon onClick={() => setShowList(true)} className={classes.marker} />
    </HtmlTooltip>
  )

  // const handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  // };

  if (isFetching) return <CircularProgress size={80} thickness={3.0} className={classes.spinner}/>;

  if (error) return <Paper>{ "An error has occurred: " + error.message }</Paper>

  return (
    <Grid item sm={7} xs={12} className={classes.root}>
      <Paper className={classes.paper}>
        {
          lat && lng ? (
            <GoogleMapReact
            defaultZoom={13}
            center={{ lat, lng }}
            defaultCenter={{ lat, lng }}
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
            // READ DOCS ON THESE 2 PROPS
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <Marker
              lat={lat}
              lng={lng}
              text="My Marker"
            />
          </GoogleMapReact>
          ) : <Typography>Please enter an address to search for claims</Typography>
        }
      </Paper>
    </Grid>
  )
}