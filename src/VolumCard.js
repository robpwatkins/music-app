import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

function VolumeCard () {

  return (
    <Card>
      <CardHeader title="Master Volume" />
      <CardContent>
        <Typography variant="p">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">volume slider</Button>
      </CardActions>
    </Card>
  );
}

export default VolumeCard;