import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Generator from './components/Generator'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/generator" component={Generator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
