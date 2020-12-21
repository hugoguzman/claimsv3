import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query'
import axios from 'axios'
import Header from './Header'
import ZipField from './ZipField'
import Map from './Map'
import List from './List'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [zip, setZip] = useState('')
  const fetchFemaClaims = () => axios.get('https://er315fks07.execute-api.us-east-1.amazonaws.com/dev/getfemaclaimsbyzip', { params: { zip } })
  const rcResp = useQuery('fetchFemaClaims', fetchFemaClaims, { enabled: false })

  useEffect(() => {
    // manually refetch
    zip && rcResp.refetch();
  }, [zip])

  return (
    <div className={classes.root}>
      <Header />
      <ZipField setZip={setZip} />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Map />
        <List {...rcResp} />
      </Grid>
    </div>
  );
}

export default App;
