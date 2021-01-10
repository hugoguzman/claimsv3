import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import SearchIcon from '@material-ui/icons/Search';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

export default function ZipField({ setZip }) {
  const classes = useStyles();

  const validationSchema = object()
    .shape({
      zip: string().matches(/^[0-9]{5}$/, 'Must be exactly 5 digits'),
    })
    .required();

  const { errors, register, handleSubmit, reset } = useForm({
    mode: 'onBlur',
    defaultValues: { zip: '' },
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data, e) => {
    reset();
    setZip(data?.zip);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={classes.root}
          >
            <IconButton className={classes.iconButton} aria-label="zip">
              <SearchIcon />
            </IconButton>
            <FormControl error={Boolean(errors?.zip)}>
              <Input
                inputRef={register}
                name="zip"
                required
                className={classes.input}
                placeholder="Enter Zipcode"
                inputProps={{ 'aria-label': 'search by zip', maxLength: 5 }}
              />
              <FormHelperText id="component-error-text">
                {errors?.zip?.message}
              </FormHelperText>
            </FormControl>
            <Button
              onClick={handleSubmit(onSubmit)}
              size="small"
              variant="outlined"
              color="secondary"
            >
              Search
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
