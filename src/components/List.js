import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MockList from './MockList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 1000
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    maxHeight: '100%', 
    overflow: 'auto'
  },
}));

export default function List() {
  const classes = useStyles();

  return (
    <Grid item xs={5} className={classes.root}>
      <Paper className={classes.paper}>
        <MockList />
      </Paper>
    </Grid>
  )
}