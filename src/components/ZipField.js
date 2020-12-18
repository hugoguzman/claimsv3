import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useQuery } from 'react-query'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function ZipField() {
  const classes = useStyles();
  const [zip, setZip] = useState('28462')
  const fetchFemaClaims = () => axios.get('https://er315fks07.execute-api.us-east-1.amazonaws.com/dev/getfemaclaimsbyzip', { params: { zip } })
  const { isLoading, error, data, refetch } = useQuery('fetchFemaClaims', fetchFemaClaims, { enabled: false })

  const fetchClaims = () => {
    // manually refetch
    refetch();
  };

  console.log('data', data)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="zip">
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Enter Zipcode"
              inputProps={{ 'aria-label': 'search by zip' }}
            />
            <Button onClick={fetchClaims} size="small" variant="outlined" color="primary">
              Search
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
