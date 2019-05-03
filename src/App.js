import React from 'react';
import logo from './logo.svg';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import './App.css';

Amplify.configure(awsmobile);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          feather-knowledge
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings:false});
