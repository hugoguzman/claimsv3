import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiDivider-inset': {
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  const items = [
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
    { title: 'Brunch this weekend?', name: 'Ali Connors', message:  "I'm baby trust fund taiyaki lumbersexual cloud bread paleo, roof party beard. Jianbing kogi VHS, flannel mlkshk health goth gentrify hella pinterest single-origin coffee four dollar toast cronut pickled. Heirloom mustache aesthetic, humblebrag gastropub hell of brooklyn shabby chic 8-bit brunch +1 squid pork belly letterpress. Taiyaki jean shorts farm-to-table, subway tile deep v street art jianbing." },
  ]

  return items.map((item, index) => (
    <List key={index} className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={item.title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {item.name}
              </Typography>
              {item.message}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  ));
}
