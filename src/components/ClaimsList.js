import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'

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

export default function ClaimsList({ claims }) {
  const classes = useStyles();

  return claims.map((claim, index) => {
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
            primary={`${reportedCity}, ${state}`}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {reportedZipcode + ' : '}
                </Typography>
                {`
                  number: ${n}, 
                  censusTract: ${censusTract}, 
                  dateOfLoss: ${format( new Date(dateOfLoss), 'MM/dd/yyyy')}, 
                  amountPaidOnBuildingClaim: ${amountPaidOnBuildingClaim}, 
                  floodZone: ${floodZone}, 
                  amountPaidOnContentsClaim: ${amountPaidOnContentsClaim}, 
                  elevationDifference: ${elevationDifference}, 
                  obstructionType: ${obstructionType}, 
                  elevationCertificateIndicator: ${elevationCertificateIndicator}, 
                  primaryResidence: ${primaryResidence}, 
                  yearOfLoss: ${yearOfLoss}, 
                  countyCode: ${countyCode}, 
                  totalContentsInsuranceCoverage: ${totalContentsInsuranceCoverage}, 
                  originalNBDate: ${format( new Date(originalNBDate), 'MM/dd/yyyy')}, 
                  totalBuildingInsuranceCoverage: ${totalBuildingInsuranceCoverage}, 
                `}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    )   
  })
}
