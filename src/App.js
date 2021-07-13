import React from 'react';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import {
  BrowserRouter as Router,Route
 } from "react-router-dom";
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      subscribers: [
        {
            id: 1,
            name: "Sanjay",
            phone: 9889999999
        },
        {
            id: 2,
            name: "Raj",
            phone: 8889999977
        },
        {
            id: 3,
            name: "Vimal",
            phone: 8889912345
        },
        {
            id: 4,
            name: "Ajay",
            phone: 9865999977
        }
    ]
    }
  }
  handleCallback = (childData) =>{
    this.setState({subscribers: childData})
}
  
  render(){
    return (
      <Router>
        <Route exact path="/">
          <ShowSubscribers parentlist = {this.state.subscribers}/>
        </Route>
        <Route path="/add">
        <AddSubscriber parentCallback = {this.handleCallback} parentlist = {this.state.subscribers}/>
        </Route>
        
      </Router>    
    )
  }
}

export default App;
