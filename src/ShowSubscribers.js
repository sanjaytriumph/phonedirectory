import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './App.css';

class ShowSubscribers extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            subslist: this.props.parentlist
        }
        
    }
    
  deleteHandler = (currentIndex) =>{    
    this.state.subslist.splice(currentIndex,1);
    //console.log(this.state.subscribers);
    this.setState(this.state.subslist);
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
            this.state.subslist.map((item, i)=>{
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
