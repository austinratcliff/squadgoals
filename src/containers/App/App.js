import React, { Component } from 'react'
import Axios from 'axios'
import { CSSTransitionGroup } from 'react-transition-group'
import Nav from '../../components/Nav/Nav'
import Content from '../../components/Content/Content'
import PublicProjects from '../../components/PublicProjects/PublicProjects'
import Profile from '../../components/Profile/Profile'
import Dashboard from '../../components/Dashboard/Dashboard'
import styles from './App.module.css'
import './AppTransitionClasses.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedInUser: {},
      visions: [],
      goals: [],
      projects: [],
      squad: [],
      homePage: true,
      profilePage: false
    }
    this.handleHomeClick = this.handleHomeClick.bind(this)
    this.handleProfileClick = this.handleProfileClick.bind(this)
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

  handleHomeClick() {
    this.setState({
      homePage: true,
      profilePage: false
    })
  }

  handleProfileClick() {
    this.setState({
      homePage: false,
      profilePage: true
    })
  }

  render() {
    let content
    let publicProjects
    let profile
    let dashboard

    if (this.state.homePage === true) {
      content = <Content key="content" />
      publicProjects = <PublicProjects key="publicProjects" />
      profile = null
      dashboard = null
    }

    if (this.state.profilePage === true) {
      content = null
      publicProjects = null
      profile = <Profile
        key="profile"
        user={this.state.loggedInUser}
      />
      dashboard = <Dashboard
        key="dashboard"
        visions={this.state.visions}
        goals={this.state.goals}
        projects={this.state.projects}
        squad={this.state.squad}
      />
    }

    return (
      <div className={styles.App}>
        <Nav
          handleHomeClick={this.handleHomeClick}
          handleProfileClick={this.handleProfileClick}
        />
        <CSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {content}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="publicProjects"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {publicProjects}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="profile"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {profile}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="dashboard"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {dashboard}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default App
