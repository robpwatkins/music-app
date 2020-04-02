import React from 'react';
import OnlineCard from './OnlineCard';
import VolumeCard from './VolumCard';
import SoundCard from './SoundCard';
import { Grid } from '@material-ui/core';

function Dashboard (props) {
    return (
      <div style={{maxWidth: '850px', margin: '25px'}}>
        <h2 style={{color: 'gray'}}>Welcome, User!</h2>
        <Grid container direction="row" spacing={6} justify="center" style={{padding: '10px'}}>
          <Grid item xs={8} sm={4}>
            <OnlineCard />
          </Grid>
          <Grid item xs={8} sm={4}>
            <VolumeCard />
          </Grid>
          <Grid item xs={8} sm={4}>
            <SoundCard />
          </Grid>
        </Grid>
        <h3>System notifications:</h3>
      </div>
    )
}

export default Dashboard;