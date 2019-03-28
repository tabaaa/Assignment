import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import About from "./About";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="center">The Educators</h1>
          <ul className="header">
          <li><NavLink to="/main">Home</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/main" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;