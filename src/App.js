import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  onLogin = props => {
    props.preventDefault();
    this.setState({ 
      loggedIn: true,
     });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.loggedIn ? (
          <LoginForm 
          onLogin={this.onLogin} 
          />
        ):(
          <Dashboard />
        )}
      </div>
    );
  }
}

export default App;