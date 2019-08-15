import React, { Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Content from '../../components/Content/Content'
import PublicProjects from '../../components/PublicProjects/PublicProjects'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Content />
        <PublicProjects />
      </div>
    )
  }
}

export default App
