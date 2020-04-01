import React from 'react';
import './App.css';
import Header from './Header';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <Dashboard />
    </div>
  );
}

export default App;
