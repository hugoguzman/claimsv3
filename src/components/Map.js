import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    maxHeight: 1000,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '100vh', 
    width: '100%'
  },
}));

export default function Map({ status = 'idle', data = undefined, error = null, isLoading = false }) {
  const classes = useStyles();
  const [lat, setLat] = useState(null)
  const [lng, setLong] = useState(null)

  useEffect(() => {
    if(status === 'success' && data?.data.length > 0) {
      setLat(Number(data?.data[0]?.latitude))
      setLong(Number(data?.data[0]?.longitude))
    }
  }, [status, data])

  const AnyReactComponent = ({ text }) => <div onClick={() => console.log('CLICKED')}>{text}</div>;

  // const handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  // };

  if (isLoading) return <CircularProgress size={80} thickness={3.0} className={classes.spinner}/>;

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
            <AnyReactComponent
              lat={lat}
              lng={lng}
              text="My Marker"
            />
          </GoogleMapReact>
          ) : <div>Please enter an address to search for claims</div>
        }
      </Paper>
    </Grid>
  )
}