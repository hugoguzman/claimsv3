import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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

  return (
    <div className={classes.root}>
      <Header />
      <ZipField />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Map />
        <List />
      </Grid>
    </div>
  );
}

export default App;
