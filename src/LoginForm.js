import React from 'react';
import { Button } from '@material-ui/core';
import Textfield from '@material-ui/core/TextField';

function LoginForm () {
  return (
    <div style={{width: '35%', paddingTop: '55px'}}>
      <Textfield fullWidth placeholder="Username *">Heyoo</Textfield>
      <br/>
      <Textfield fullWidth placeholder="Password *">Heyoo</Textfield>
      <br/>
      <Button style={{marginTop: '15px'}} fullWidth color="primary" variant="contained" >LOGIN</Button>
    </div>
  )
}

export default LoginForm;