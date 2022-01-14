import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <aside>
            <div className="text-center">
              <h1>Sally Steuterman</h1>
              <p>sally.steuterman@gmail.com</p>
            </div>
            <nav role="navigation" className="navbar">
              <div>
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/gildedgardenia" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            </aside>
        </div>
      </div>
    )
  }
}