import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'
import { formatter } from '../helpers'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontFamily: theme.typography.fontFamily,
    '& .MuiDivider-inset': {
      marginLeft: 0
    },
    '& .MuiTypography-body1': {
      paddingLeft: 12
    },
    '& .MuiGrid-spacing-xs-3 > .MuiGrid-item': {
      padding: 8
    }
  },
  gridRoot: {
    flexGrow: 1,
    fontSize: 13,
    paddingBottom: '1rem'
  },
  inline: {
    display: 'inline',
  },
  groupId: {
    fontWeight: 500,
    color: theme.palette.secondary.main
  }
}));

export default function ClaimsList({ claims }) {
  const classes = useStyles();
  let groupIdArr = []

  return claims.map((claim) => {
    const {
      // n,
      // censusTract,
      // latitude,
      // longitude,
      // reportedCity,
      // state,
      // reportedZipcode,
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
      countyCode,
      totalContentsInsuranceCoverage,
      originalNBDate,
      totalBuildingInsuranceCoverage,
    } = claim

    groupIdArr = groupIdArr.includes(group_id) ? [...groupIdArr, group_id] : [group_id]

    return (
      <List key={id} className={classes.root}>
        <h3><Typography>Detailed Claim Info</Typography></h3>
        <ListItem alignItems="flex-start">
          <Grid container spacing={3} className={classes.gridRoot}>
            <Grid item xs={12} sm={4}>
              <span className={classes.groupId}>{`Claim: #${groupIdArr.length}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`Date of Loss: ${format( new Date(dateOfLoss), 'MM/dd/yyyy')}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`Paid On Building: ${amountPaidOnBuildingClaim !== 'NA' ? formatter.format(amountPaidOnBuildingClaim): amountPaidOnBuildingClaim}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`floodZone: ${floodZone}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`Paid On Contents: ${amountPaidOnContentsClaim !== 'NA' ? formatter.format(amountPaidOnContentsClaim): amountPaidOnContentsClaim}`}</span>
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
              <span>{`Contents Coverage: ${totalContentsInsuranceCoverage !== 'NA' ? formatter.format(totalContentsInsuranceCoverage): totalContentsInsuranceCoverage}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`Date Built: ${format( new Date(originalNBDate), 'MM/dd/yyyy')}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span>{`Building Coverage: ${totalBuildingInsuranceCoverage !== 'NA' ? formatter.format(totalBuildingInsuranceCoverage) : totalBuildingInsuranceCoverage}`}</span>
            </Grid>
            <Grid item xs={12} sm={4}>
              <span className={classes.groupId}>{`Group Id: ${group_id}`}</span>
            </Grid>
          </Grid>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )   
  })
}
