import React, { Component } from 'react';
import './App.css';


export default class Comp extends Component {
    constructor(props){
        super(props)
    }
    render(props) {
        //render always runs last like an annoying one upper
      
        return (
            <div>
                <div className="comp" style={{ backgroundColor: this.props.color.s }}>Props Color</div>
            </div>
        );
    }
}