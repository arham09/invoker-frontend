import React, { Component } from 'react'
import './App.css'
import Person from './person/person'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>First React by Arham</h1>
        <p>First step of learning Frontend Development</p>
        <Person />
      </div>
    )
  }
}

export default App
