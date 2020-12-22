import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import MockList from './MockList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 1000,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    maxHeight: '100%', 
    overflow: 'auto'
  },
  spinner: {
    margin: 'auto',
    marginTop: '10%',
  }
}));

export default function List({ data = undefined, error = null, isLoading = false }) {
  const classes = useStyles();

  if (isLoading) return <CircularProgress size={80} thickness={3.0} className={classes.spinner}/>;

  if (error) return <Paper>{ "An error has occurred: " + error.message }</Paper>

  return (
    <Grid item xs={5} className={classes.root}>
      <Paper className={classes.paper}>
        { data?.data.length > 0 ? <MockList claims={data?.data}/> : 'No Claims Reported: Please enter a new zipcode'}
      </Paper>
    </Grid>
  )
}