import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import axios from 'axios';
import Header from './Header';
import ZipField from './ZipField';
import Map from './Map';
import List from './List';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [zip, setZip] = useState('');
  const [showList, setShowList] = useState(false);
  const fetchFemaClaims = () =>
    axios.get(process.env.REACT_APP_AWS_URL, { params: { zip } });
  const { status, data, error, isFetching, refetch } = useQuery(
    'fetchFemaClaims',
    fetchFemaClaims,
    {
      enabled: false,
    }
  );

  console.log('data', data);
  useEffect(() => {
    if (zip) {
      refetch();
      setShowList(false);
    }
  }, [zip, refetch]);

  return (
    <div className={classes.root}>
      <Header />
      <ZipField setZip={setZip} />
      <Grid container spacing={3} className={classes.gridContainer}>
        <Map
          zip={zip}
          status={status}
          data={data}
          error={error}
          isFetching={isFetching}
          refetch={refetch}
          setShowList={setShowList}
        />
        <List data={data} showList={showList} />
      </Grid>
    </div>
  );
}

export default App;
