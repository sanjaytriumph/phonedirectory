import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class AddSubscriber extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            name:'',
            phone:'',
            subslist: this.props.parentlist,
            submitMsg: ''
        }
    }
    onChangeHandler = (e) =>{
       const state = this.state;
       state[e.target.name] = e.target.value;
       this.setState(state);
       console.log(this.state);
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.phone);
        this.state.subslist.push({name: this.state.name, phone: this.state.phone});
        /*let newarray = this.state.subslist;
        console.log(newarray);
        this.setState(newarray);*/
        this.setState({submitMsg: 'subscriber added!'})
    }
    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header headertext="Add Subscriber"/>
                <Link to='/'><button>Back</button></Link>
                <form onSubmit={this.onSubmitHandler}>
                    <p><label>Name: </label> <input required type="text" name="name" placeholder="enter name" onChange={this.onChangeHandler}/></p>
                    <p><label>Phone: </label> <input required type="tel" name="phone" placeholder="enter phone" onChange={this.onChangeHandler}/></p>
                    <p><strong>Subscriber to be added</strong></p>
                    <p>Name: {name}</p>
                    <p>Phone: {phone}</p>
                    <button type="submit">Submit</button>
                    {this.state.submitMsg}
                </form>
            </div>
            
            )
    }
}

export default AddSubscriber