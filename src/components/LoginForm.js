import React from 'react';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

function LoginForm (props) {
    return (
      <div style={{width: '35%', paddingTop: '55px'}}>
        <form onSubmit={event => props.onLogin(event)}>
          <Input 
            fullWidth 
            placeholder="Username *">
          </Input>
          <br/>
          <Input 
            type="password" 
            fullWidth 
            placeholder="Password *">
          </Input>
          <br/>
          <Button 
            type="submit" 
            fullWidth
            style={{marginTop: '15px'}} 
            color="primary" 
            variant="contained">
            Submit
          </Button>
        </form>
      </div>
    )
}

export default LoginForm;