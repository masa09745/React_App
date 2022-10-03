import React from 'react';
import logo from './logo.svg';
import './App.css';


import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export const App = () => {
  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}


