import React from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  onLogin = props => {
    props.preventDefault();
    this.setState({ 
      loggedIn: true
     });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.loggedIn ||
          <LoginForm 
          onlogin={this.onLogin} 
          loggedin={this.state.loggedIn}
          />
        }
        {this.state.loggedIn &&
          <Dashboard 
          loggedin={this.state.loggedIn}
          />
        }
      </div>
    );
  }
}

export default App;
