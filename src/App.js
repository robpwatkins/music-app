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
    this.setState({ loggedIn: true });
    console.log(this.state.loggedIn);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm onlogin={this.onLogin} loggedin={this.state.loggedIn} />
        <Dashboard loggedin={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
