import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '@material-ui/core/Slider';

function VolumeCard () {

  return (
    <Card style={{padding: '10px 0px 13px 0px '}}>
      <CardHeader title="Master Volume" style={{paddingBottom: '0'}} />
      <CardContent>
        <Typography variant="body1" style={{marginBottom: '25px'}}>
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      </CardActions>
    </Card>
  );
}

export default VolumeCard;