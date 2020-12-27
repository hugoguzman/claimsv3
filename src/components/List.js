import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ClaimsList from './ClaimsList'

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
  spinner: {
    margin: 'auto',
    marginTop: '10%',
  }
}));

export default function List({ data = [] }) {
  const classes = useStyles();

  return (
    <Grid item item sm={5} xs={12} className={classes.root}>
      <Paper className={classes.paper}>
        { data.length > 0 ? <ClaimsList claims={data?.data}/> : <div>Please click on "get info" on map pin to see claims</div>}
      </Paper>
    </Grid>
  )
}