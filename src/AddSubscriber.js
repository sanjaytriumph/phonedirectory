import React from 'react';
import Header from './Header';
class AddSubscriber extends React.Component{
    render(){
        return(
            <div>
                <Header headertext="Add Subscriber"/>
                <button>Back</button>
                <form>
                    <p><label>Name: </label> <input type="text" name="sname" placeholder="enter name"/></p>
                    <p><label>Phone: </label> <input type="tel" name="sphone" placeholder="enter phone"/></p>
                    <p><strong>Subscriber to be added</strong></p>
                    <p>Name: sushil kumar</p>
                    <p>Phone: 9888888888</p>
                    <button>Submit</button>
                </form>
            </div>
            
            )
    }
}

export default AddSubscriber