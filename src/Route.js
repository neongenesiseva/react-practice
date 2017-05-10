import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import App from './App';
import Clock from './Clock';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Routing = () => (
  <Router>
  <div>
    <div className="App">
      <Header headerText="Welcome to React"/>
    </div>
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clock">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/clock" component={Clock}/>
    </div>
  </div>
  </Router>
)

class Header extends React.Component{
  render(){
    return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{this.props.headerText}</h2>
    </div>
  )
  }
}

export default Routing;
