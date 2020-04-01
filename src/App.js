import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item />
        <Grid style={{flex: 1}}>
          <Content />
        </Grid>
        <Grid/>
      </Grid>
    </Grid>
  );
}

export default App;
