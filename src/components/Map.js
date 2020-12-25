import {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function Map({ status, data }) {
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

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    <Grid item xs={6} className={classes.root}>
      <Paper className={classes.paper}>
        {
          lat && lng ? (
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_KEY }}
            defaultCenter={{ lat, lng }}
            defaultZoom={13}
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
          ) : null
        }
      </Paper>
    </Grid>
  )
}