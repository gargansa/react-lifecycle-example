import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    color: {// easier to setState of objects when they are in an object
      s: 'rgb(255,255,255)',
      cDM: 'rgb(255,255,255)',
    }
  }

  constructor() {
    super()
    console.log('Constructor Called')
    this.state.color.s = this.randomColor()

    this.randomColor = this.randomColor.bind(this)
    this.functionToSetState = this.functionToSetState.bind(this)
    this.time = this.time.bind(this)
  }
  functionToSetState() {
    this.setState(previousState => ({
      color: {
        ...previousState.color,
        s: this.randomColor()
      }
    }
    ))
    // var dt = new Date( "December 25, 1995 23:15:20" );
    var t = this.time()
    console.log('setState Called' + t)
  }

  componentDidMount() {
    //perfect place to set state runs once after component is built
    this.setState(previousState => ({
      color: {
        ...previousState.color,
        cDM: previousState.color.s
      }
    }
    ))
    var t = this.time()
    console.log('componentDidMount Called' + t)
  }

  componentWillUpdate() {
    //cant set state here because this is called everytime after the state is set. 
    //if you could setState it would cause componentWillUpdate to run again which would setState and then cause componentWillUpdate to run again 
    //causeing an infinite loop
    var t = this.time()
    console.log('componentWillUpdate Called' + t)
  }

  componentDidUpdate() {
    //cant setState here either for same reason Infinite loop
    var t = this.time()
    console.log('componentDidUpdate Called' + t)
  }


  render() {
    //render always runs last like an annoying one upper
    var t = this.time()
    console.log('render Called' + t)

    return (
      <div>
        <button onClick={this.functionToSetState} className="all" >
          <div className="state" style={{ backgroundColor: this.state.color.s }}>Click to setState Color</div>
          <div className="componentDidMount" style={{ backgroundColor: this.state.color.cDM }}>componentDidMount Color</div>
        </button>
      </div>
    );
  }

  randomColor() {//picks random color
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  time(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    return " "+h+":"+m+":"+s
  }

}

export default App;
