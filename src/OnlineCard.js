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
    <Card style={{padding: '10px'}}>
      <CardHeader title="Online Mode" />
      <CardContent>
        <Typography variant="body1">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <FormControlLabel
          control={
            <Switch />
          }
        />
      </CardActions>
    </Card>
  );
}

export default OnlineCard;