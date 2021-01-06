import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ClaimsList from './ClaimsList'
import _sortBy from 'lodash/sortBy'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 800,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: 'auto',
    width: '100%'
  },
}));

export default function List({ data = [], showList = false }) {
  const classes = useStyles();

  return (
    <Grid item sm={5} xs={12} className={classes.root}>
      <Paper className={classes.paper}>
        { showList && data?.data.length > 0 ? <ClaimsList claims={_sortBy(data?.data, cl => cl.group_id)}/> : <Typography>Enter a zipcode and click on the pin to see detailed info on duplicate claims</Typography>}
      </Paper>
    </Grid>
  )
}
