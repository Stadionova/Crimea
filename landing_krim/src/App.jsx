import MainPage from './MainPage/MainPage';
import classes from './App.module.css';
import Trip from './Trip/Trip';
import { Route } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import EachDay from './EachDay/EachDay';
import React from "react";

function App() {
  return (
    <div className={classes.app}>
      <Route path='/main' component={MainPage} />
      <Route path='/trip' component={Trip} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/day' component={EachDay} />
    </div>
  );
}

export default App;
