import React from 'react';
import OnlineCard from './OnlineCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';
import { Grid } from '@material-ui/core';

class Dashboard extends React.Component {
  state = {
    online: true,
    volume: 30,
    soundQuality: 2,
  }

  toggleSwitch = () => {
    this.setState({ online: !this.state.online });
    console.log(`online: ${this.state.online}`);
  }

  volumeChange = (props) => {
    console.log(`Volume: ${props}`);
  }

  dropdownChange = props => {
    this.setState(( {soundQuality: props }), () => {
      console.log(`Sound Quality: ${this.state.soundQuality}`);
    })
  }

  render() {
    return (
      <div style={{maxWidth: '850px', margin: '25px'}}>
        <h2 style={{color: 'gray'}}>Welcome, User!</h2>
        <Grid container direction="row" spacing={6} justify="center" style={{padding: '10px'}}>
          <Grid item xs={8} sm={4}>
            <OnlineCard toggleSwitch={this.toggleSwitch}/>
          </Grid>
          <Grid item xs={8} sm={4}>
            <VolumeCard volumeChange={this.volumeChange}/>
          </Grid>
          <Grid item xs={8} sm={4}>
            <SoundCard dropdownChange={this.dropdownChange} soundQuality={this.state.soundQuality}/>
          </Grid>
        </Grid>
        <h3>System notifications:</h3>
      </div>
    )
  }
}

export default Dashboard;