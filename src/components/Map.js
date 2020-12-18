import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Map() {
  const classes = useStyles();

  return (
    <Grid item xs={6} className={classes.root}>
      <Paper className={classes.paper}>
        <img src='https://www.technobuffalo.com/sites/technobuffalo.com/files/styles/large/public/wp/2013/05/google-maps-pizza-new-york-crop-vertical.jpg' />
      </Paper>
    </Grid>
  )
}
