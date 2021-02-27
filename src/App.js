import React from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import Beer from './components/Beer';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerId" component={Beer} />
        {/* <Route exact path="/random-beer" component={RandomBeer} /> */}
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
