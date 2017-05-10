import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
    constructor (props){
      super(props)
      this.state={
        date:new Date(),
        data:0
      }
    this.findMyDOMNode=this.findMyDOMNode.bind(this)
    this.setNewNumber=this.setNewNumber.bind(this)
    }

    componentDidMount(){
      var timeId=setInterval(() => this._tick(),1000)
    };
    //setInterval should use arrow function


    _tick(){this.setState({date:new Date()})};

    findMyDOMNode(){
      var myDiv= document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color='red';
    }

    setNewNumber(){
      this.setState({data:this.state.data+1})
    }

    componentWillUnmount() {
      setTimeout(()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('myDiv'));
      },1000)
    }//didnt work,only works in index.html

    render(){
      return(
        <div>
      <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
      <button onClick={this.findMyDOMNode}>Find My DOM Node</button>
      <div id="myDiv">This is my div</div>
      <button onClick={this.setNewNumber}>Update Number</button>
      <NumberComponent data={this.state.data}/>
      </div>
    )
    }
}

class NumberComponent extends React.Component{
  // compoenntWillMount(){
  //   console.log('call compoenntWillMount')
  // }
  // componentDidMount() {
  //   console.log('call componentDidMount')
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('call componentWillUpdate')
  // }
  // componentWillUnmount() {
  //   console.log('call componentWillUnmount')
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('call componentWillReceiveProps')
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('call componentDidUpdate')
  // }
  render(){
    return(
    <div>{this.props.data}</div>
  )
  }
}

export default Clock;
