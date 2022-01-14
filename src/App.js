import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline';
import Sidebar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <div>
      <div id="sidebar">
        <Sidebar></Sidebar>
      </div>
				<div id="main">
          <Introduction></Introduction>
					<About></About>
          <Timeline></Timeline>
        </div>
        </div>
    );
  }
}

export default App;