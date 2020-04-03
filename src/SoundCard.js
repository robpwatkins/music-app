import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function SoundCard (props) {

    return (
      <Card style={{padding: '10px 0px'}}>
        <CardHeader title="Sound Quality" style={{paddingBottom: '0'}} />
        <CardContent>
          <Typography variant="body1">
            Manually control the music quality in the event of poor connection
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl fullWidth>
            <Select onChange={event => props.dropdownChange(event.target.value)} value=''>
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
    );
}

export default SoundCard;