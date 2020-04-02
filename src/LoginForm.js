import React from 'react';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

function LoginForm (props) {
    return (
      <div style={{width: '35%', paddingTop: '55px'}}>
        <form onSubmit={event => props.onlogin(event)}>
          <Input 
            fullWidth 
            placeholder="Username *"
            onChange={event => props.updateusername(event)}
            ></Input>
          <br/>
          <Input type="password" fullWidth placeholder="Password *"></Input>
          <br/>
          <Button 
            type="submit" 
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
}

export default LoginForm;