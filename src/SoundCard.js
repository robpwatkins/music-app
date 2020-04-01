import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

function SoundCard () {

  return (
    <Card>
      <CardHeader title="Sound Quality" />
      <CardContent>
        <Typography variant="p">
          Manually control the music quality in the event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">dropdown</Button>
      </CardActions>
    </Card>
  );
}

export default SoundCard;