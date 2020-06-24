import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import StatBuilder from './containers/StatBuilder/StatBuilder';

function App() {
  return (
    <div className="App">
     	<Layout />
     	<StatBuilder />
    </div>
  );
}

export default App;
