import React, { Component } from 'react';
import './App.css';


export default class Comp extends Component {
    constructor(props){
        super(props)
    }
    render() {
      
        return (
            <div>
                <div className="comp" style={{ backgroundColor: this.props.color.s }}>Props Color</div>
            </div>
        );
    }
}