import React from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class App extends React.Component {
  state = {
    loggedIn: false,
    username: ''
  }

  onLogin = props => {
    props.preventDefault();
    this.setState({ 
      loggedIn: true,
      username: props.target.value
     });
  }

  updateUsername = props => {
    this.setState({ username: props.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? (
          <LoginForm 
          onlogin={this.onLogin} 
          />
        ):(
          <Dashboard 
          />
        )}
      </div>
    );
  }
}

export default App;
