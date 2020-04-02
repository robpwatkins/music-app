import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function OnlineCard () {

  return (
    <Card style={{padding: '10px 0px 3px 0px'}}>
      <CardHeader title="Online Mode" style={{paddingBottom: '0'}}/>
      <CardContent>
        <Typography variant="body1" style={{marginBottom: '25px'}}>
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <FormControlLabel
          style={{paddingLeft: '5px'}}
          control={
            <Switch />
          }
        />
      </CardActions>
    </Card>
  );
}

export default OnlineCard;