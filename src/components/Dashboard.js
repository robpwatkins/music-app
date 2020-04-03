import React from 'react';
import OnlineCard from './OnlineCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';
import Notifications from './Notifications';
import Grid from '@material-ui/core/Grid';

class Dashboard extends React.Component {
  state = {
    online: true,
    volume: 30,
    soundQuality: 2,
    notifications: []
  }

  toggleSwitch = () => {
    const isOnline = this.state.online;
    this.setState({ online: !isOnline });
    !this.state.online &&
    this.setState({
      notifications: [...this.state.notifications,
      //  "Your application is offline. You won't be able to share or stream music to other devices."]
      "Get online!"] 
  });
  }

  volumeChange = level => {
    level >= 80 && 
    this.setState({
      notifications: [...this.state.notifications, 
        // "Listening to music at a high volume could cause long-term hearing loss."]
        "It's too loud!"]
    })
    this.setState({ volume: level });
  }

  dropdownChange = quality => {
    quality === 1 &&
    this.setState({
      notifications: [...this.state.notifications,
        // "Music quality is degraded. Increase quality if your connection allows it."]
        "NO!"]
    })
      this.setState({ soundQuality: quality });
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
        <Notifications notifications={this.state.notifications}/>
      </div>
    )
  }
}

export default Dashboard;