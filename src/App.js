import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={4} md={5}/>
        <Grid style={{textAlign: 'center'}} item xs={12} sm={4} md={2}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={4} md={5}/>
      </Grid>
    </Grid>
  );
}

export default App;
