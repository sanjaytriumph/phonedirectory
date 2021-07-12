import React from 'react';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import {
  BrowserRouter as Router,Route
 } from "react-router-dom";
import './App.css';

function App() {

  
  return (
    <Router>
      <Route exact path="/">
        <ShowSubscribers/>
      </Route>
      <Route path="/add">
      <AddSubscriber/>
      </Route>
      
    </Router>    
  );
}

export default App;
