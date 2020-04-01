import React from 'react';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

function LoginForm (props) {
  if (!props.loggedin) {
    return (
      <div style={{width: '35%', paddingTop: '55px'}}>
        <form onSubmit={event => props.onlogin(event)}>
          <Input fullWidth placeholder="Username *"></Input>
          <br/>
          <Input fullWidth placeholder="Password *"></Input>
          <br/>
          <Button 
            type="submit" 
            value="Submit" 
            style={{marginTop: '15px'}} 
            fullWidth 
            color="primary" 
            variant="contained"
            >
            Submit
          </Button>
        </form>
      </div>
    )
  } else {
    return null;
  }
}

export default LoginForm;