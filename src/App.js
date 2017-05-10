import React, { Component } from 'react';

import './App.css';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Content/>
      <InputComponent/>
      </div>
    );
  }
}



class Content extends React.Component{
  constructor(){
    super()
    this.state={
      contentText:"In this lecture we will go through Component",
      data:[
        {
          "id":1,
          "name":"foo",
          "age":"30"
        },
        {
          "id":2,
          "name":"bar",
          "age":"20"
        },
        {
          "id":3,
          "name":"baz",
          "age":"10"
        }
      ],
      datum:[],
      count:0,
      rand:0
    }
    this.updateMyState=this.updateMyState.bind(this)
    this.updateRandom=this.updateRandom.bind(this)
  };

  updateMyState(){
    var count = this.state.count;
    count++;
    this.setState({
      count:count
    });
    console.log(this.state.count);
    // var item = "click - "+count;
    // var myArray = this.state.datum;
    // myArray.push(item);
    // console.log(myArray);
  };

  updateRandom(){
    var temp = Math.random();
    if (temp > this.state.rand){
    this.setState({
      rand:temp
    });};
  };

  render(){
    return (
      <div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        {this.state.contentText}
      </p>
      <table>
          <thead>
            <th>
              <td>id</td>
              <td>name</td>
              <td>age</td>
            </th>
          </thead>
          <tbody>
          {this.state.data.map((person,i) => <TableRow key={i} data={person}/> )}
          </tbody>
      </table>
      <button onClick={this.updateMyState}>Click Me</button>
      <h4>State Data {this.state.count}</h4>
      <button onClick={this.updateRandom}>Generate Random larger than before</button>
      <h4>Random Number: {this.state.rand}</h4>
      </div>
    )
  }
}

//Component should initiate with Capitilized Character.

class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
     </tr>
    )
  }
}


class InputComponent extends React.Component{
  constructor(props){

  	super(props);
  	this.state = {
      myInput:"aa"
    };
    this.myInputchanged = this.myInputchanged.bind(this);
    //everytime a event happens, button, input, which call a function, should
    //use bind(this) to ensure this event will be triggered.
  }

  myInputchanged(e){
    let itemValue = e.target.value;
    console.log('this',this);
    this.setState({myInput:itemValue});
  }

  render(){
    return(
      <div>
      <p>{this.state.myInput}</p>
      <MyInputComponent inputValue={this.state.myInput} myInputChanged={this.myInputchanged}/>
      </div>
    );
  }
}

class MyInputComponent extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      value:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleSubmit(e){
    alert(this.state.value);
    e.preventDefault();
  }

  handleChange(e){
    this.setState({value:e.target.value})
  }

  render(){
    return(
      <div>
        <input value={this.props.inputValue} onChange={this.props.myInputChanged} />
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
