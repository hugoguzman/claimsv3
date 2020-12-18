import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { object, string } from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
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
  const [zip, setZip] = useState('')
  const fetchFemaClaims = () => axios.get('https://er315fks07.execute-api.us-east-1.amazonaws.com/dev/getfemaclaimsbyzip', { params: { zip } })
  const { isLoading, error, data, refetch } = useQuery('fetchFemaClaims', fetchFemaClaims, { enabled: false })

  useEffect(() => {
    // manually refetch
    zip && refetch();
  }, [zip])

  const validationSchema = 
        object().shape({
          zip: string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
        })
      .required()
  
  const { errors, register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: { zip: '' }, 
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur'
  })

  const onSubmit = (data, e) => {
    setZip(data?.zip)
    reset()
  }
  
  console.log('data', data)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper component="form" onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="zip">
              <SearchIcon />
            </IconButton>
              <Input
                inputRef={register}
                name="zip"
                required
                className={classes.input}
                placeholder="Enter Zipcode"
                inputProps={{ 'aria-label': 'search by zip', maxLength: 5 }}
                error={errors.hasOwnProperty('zip')}
              />
              <Button onClick={handleSubmit(onSubmit)} size="small" variant="outlined" color="primary">
                Search
              </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
