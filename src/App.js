import React from 'react'
import User from './User'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>It's working</h1>
      <User data={{name:"Shankar",age:"25"}}/>
    </div>
  );
}

export default App;
