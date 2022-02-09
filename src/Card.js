import React, { Component } from 'react'
import './App.css';

class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <img src={this.props.photo}/>
            <h2>{this.props.Heading}</h2>
            <p>{this.props.para}</p>
            <h3>{this.props.GameName}</h3>
                
            </div>

        );
    }
}

export default Card;