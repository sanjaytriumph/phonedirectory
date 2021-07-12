import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './App.css';

class ShowSubscribers extends React.Component{
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
    
  deleteHandler = (currentIndex) =>{    
    this.state.subscribers.splice(currentIndex,1);
    //console.log(this.state.subscribers);
    this.setState(this.state.subscribers);
  };

  
  render(){
    return (
        <div>
          <Header headertext="Reactjs Phone Directory"/>
          <Link to="/add"><button>Add</button></Link>
          <div className="field-row">
            <span className="field-item strong">Name</span>
            <span className="field-item strong">Phone</span>
          </div>      
          
          {
            this.state.subscribers.map((item, i)=>{
              return(
                <div className="field-row" key={i}>
                  <span className="field-item">{item.name}</span>
                  <span className="field-item">{item.phone}</span>
                  <span className="field-item"><button className="delete" onClick={this.deleteHandler.bind(this, i)}>Delete</button></span>
                </div>
              )
            })
          }
         
        </div>
      );
  }
}

export default ShowSubscribers;
