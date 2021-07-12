import React from 'react';

class Random extends React.Component{
    constructor(){
        super();
        this.state = {
            numberCards: ['Click','Click','Click'],
            textone: 'text one',
            texttwo: 'text two',
            textthree: 'text three'
        }
    }

    componentDidMount(){
        let newarray = this.state.numberCards;
        newarray[0] = this.generateRandomNumber();
        this.setState({
            numberCards: newarray
        })
    }

    clickHandler = (cardIndex) => (e) => {
        alert('clicked' + cardIndex);
    }

    generateRandomNumber = () => {
        let maxNumber = 9;
        return Math.floor(Math.random() * (maxNumber + 1)).toString();
    }
    render(){
        return <div>
            <div className="number-card" onClick = {this.clickHandler(0)}>
                <span>{this.state.numberCards[0]}</span>
            </div>
            <div className="number-card" onClick = {this.clickHandler(1)}>
                <span>{this.state.numberCards[1]}</span>
            </div>
            <div className="number-card" onClick = {this.clickHandler(2)}>
                <span>{this.state.numberCards[2]}</span>
            </div>
        </div>

    }
}

export default Random