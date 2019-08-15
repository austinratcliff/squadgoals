import React, { Component } from 'react'
import Axios from 'axios'
import PublicProject from './PublicProject/PublicProject'
import './PublicProjects.css'

class PublicProjects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/projects')
      .then(response => {
        this.setState({
          projects: response.data
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    let projects = [...this.state.projects]

    const publicProjects = projects.filter(publicProject => {
      return !publicProject.is_private
    }).map(publicProject => {
      return <PublicProject key={publicProject.id} publicProject={publicProject} />
    })

    return (
      <div className="PublicProjects">
        <h1 className="header">Projects at work</h1>
        {/* TODO: Remove multiples for production */}
        {publicProjects}
        {publicProjects}
        {publicProjects}
        {publicProjects}
        {publicProjects}
      </div>
    )
  }
}

export default PublicProjects
