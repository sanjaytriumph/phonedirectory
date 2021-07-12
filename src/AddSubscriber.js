import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class AddSubscriber extends React.Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }
    onChangeHandler = (e) =>{
       const state = this.state;
       state[e.target.name] = e.target.value;
       this.setState(state);
       console.log(this.state);
    }
    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header headertext="Add Subscriber"/>
                <Link to='/'><button>Back</button></Link>
                <form>
                    <p><label>Name: </label> <input type="text" name="name" placeholder="enter name" onChange={this.onChangeHandler}/></p>
                    <p><label>Phone: </label> <input type="tel" name="
                    phone" placeholder="enter phone" onChange={this.onChangeHandler}/></p>
                    <p><strong>Subscriber to be added</strong></p>
                    <p>Name: {name}</p>
                    <p>Phone: {phone}</p>
                    <button>Submit</button>
                </form>
            </div>
            
            )
    }
}

export default AddSubscriber