import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  let subscribers = [
    {
      name: "Sanjay",
      phone: 9889999999
    },
    {
      name: "Raj",
      phone: 8889999977
    }
]
  return (
    <div>
      <Header headertext="Reactjs Phone Directory"/>
      <button>Add</button>
      <div className="field-row">
        <span className="field-item strong">Name</span>
        <span className="field-item strong">Phone</span>
      </div>      
      {/* <div className="field-row">
        <span className="field-item">Sanjay</span>
        <span className="field-item">9888888888</span>
      </div> */}
      {
        subscribers.map((item, i)=>{
          return(
            <div className="field-row" key={i}>
              <span className="field-item">{item.name}</span>
              <span className="field-item">{item.phone}</span>
              <span className="field-item"><button className="delete">Delete</button></span>
            </div>
          )
        })
      }
     
    </div>
  );
}

export default App;
