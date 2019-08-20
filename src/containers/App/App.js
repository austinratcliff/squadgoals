import React, { Component } from 'react'
import Axios from 'axios'
import Nav from '../../components/Nav/Nav'
import Profile from '../../components/Profile/Profile'
import Content from '../../components/Content/Content'
import Dashboard from '../../components/Dashboard/Dashboard'
import PublicProjects from '../../components/PublicProjects/PublicProjects'
import './App.css'

class App extends Component {
  state = {
    loggedInUser: {},
    visions: [],
    goals: [],
    projects: [],
    squad: []
  }

  // TODO: Change to JWT and Knock for production
  componentDidMount() {
    Axios.get('http://localhost:3001/users/1')
      .then(response => {
        this.setState({
          loggedInUser: response.data,
          visions: response.data.visions,
          goals: response.data.goals,
          projects: response.data.projects,
          squad: response.data.squad.members
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // TODO: Change to React CSS Transition Group for production
  handleHomeClick() {
    document.querySelector('.Dashboard').classList.add('hide')
    document.querySelector('.Profile').classList.add('slide-left')
    document.querySelector('.Content').classList.remove('hide')
    document.querySelector('.PublicProjects').classList.remove('slide-right')
  }

  // TODO: Change to React CSS Transition Group for production
  handleProfileClick() {
    document.querySelector('.Content').classList.add('hide')
    document.querySelector('.PublicProjects').classList.add('slide-right')
    document.querySelector('.Dashboard').classList.remove('hide')
    document.querySelector('.Profile').classList.remove('slide-left')
  }

  render() {
    return (
      <div className="App">
        <Nav
          handleHomeClick={this.handleHomeClick}
          handleProfileClick={this.handleProfileClick}
        />
        <Profile user={this.state.loggedInUser} />
        <Content />
        <Dashboard
          visions={this.state.visions}
          goals={this.state.goals}
          projects={this.state.projects}
          squad={this.state.squad}
        />
        <PublicProjects />
      </div>
    )
  }
}

export default App
