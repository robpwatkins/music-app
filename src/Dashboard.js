import React from 'react';
import OnlineCard from './OnlineCard';
import VolumeCard from './VolumCard';
import SoundCard from './SoundCard';
import { Grid } from '@material-ui/core';

function Dashboard () {
  return (
    <div style={{width: '65%'}}>
      <h2 style={{color: 'gray'}}>Welcome, User!</h2>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={4}>
          <OnlineCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <VolumeCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SoundCard />
        </Grid>
      </Grid>
      <h3>System notifications:</h3>
    </div>
  )
}

export default Dashboard;