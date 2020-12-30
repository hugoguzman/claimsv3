import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiDivider-inset': {
      marginLeft: 0
    }, 
    '& .MuiTypography-body1': {
      paddingBottom: '1rem'
    },
  },
  gridRoot: {
    flexGrow: 1,
    '& .MuiGrid-spacing-xs-3 > .MuiGrid-item': {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 12,
    }
  },
  inline: {
    display: 'inline',
  },
}));

export default function ClaimsList({ claims }) {
  const classes = useStyles();

  return claims.map((claim) => {
    const {
      n,
      censusTract,
      dateOfLoss,
      amountPaidOnBuildingClaim,
      id,
      floodZone, 
      amountPaidOnContentsClaim, 
      group_id,
      elevationDifference,
      obstructionType,
      elevationCertificateIndicator, 
      primaryResidence,
      yearOfLoss, 
      latitude,
      longitude,
      reportedCity,
      state,
      reportedZipcode,
      countyCode,
      totalContentsInsuranceCoverage,
      originalNBDate,
      totalBuildingInsuranceCoverage,
    } = claim

    return (
      <List key={id} className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={<span>Detailed Claim Info</span>}
            secondary={
              <div className={classes.gridRoot}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <span>{`Claims: ${n}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Date of Loss: ${format( new Date(dateOfLoss), 'MM/dd/yyyy')}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Paid On Building: ${amountPaidOnBuildingClaim}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`floodZone: ${floodZone}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Paid On Contents: ${amountPaidOnContentsClaim}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Elevation Difference: ${elevationDifference}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Obstruction Type: ${obstructionType}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Elevation Certificate: ${elevationCertificateIndicator}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Primary Residence: ${primaryResidence}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Year of Loss: ${yearOfLoss}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`County Code: ${countyCode}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Contents Coverage: ${totalContentsInsuranceCoverage}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Date Built: ${format( new Date(originalNBDate), 'MM/dd/yyyy')}`}</span>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <span>{`Building Coverage: ${totalBuildingInsuranceCoverage}`}</span>
                  </Grid>
                </Grid>
              </div>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )   
  })
}
