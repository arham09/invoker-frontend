import React, { Component } from 'react'
import './person.css'

class Person extends Component {
  render () {
    return (
      <div className='person'>
        <p>My name {this.props.name} And I'm {this.props.age} years sold</p>
        <p>My hobby is {this.props.hobby}</p>
      </div>
    )
  }
}

export default Person
