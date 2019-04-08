import React, { Component } from 'react'
import './App.css'
import Person from './person/person'
import Footer from './components/footer'

class App extends Component {
  state = {
    persons: [
      {name: 'Arham', age: 22, hobby: 'Coding'},
      {name: 'Awal', age: 22, hobby: 'Fishing'},
    ],
    other: 'Ampass'
  }

  switchNameHandler = (name, age) => {
    // console.log('Clicked')
    this.setState({
      persons: [
        {name: name, age: age, hobby: 'Coding'},
        {name: 'Awal Awal', age: 22, hobby: 'Fishing'},
      ]
    })
  }

  render () {
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1>First React by Arham</h1>
        <p>First step of learning Frontend Development</p>
        <button
          style={styles} 
          onClick={this.switchNameHandler.bind(this, 'Aruhama', 19)}>
            Switch Button
        </button>
        {/* {console.log(this.state)} */}
        <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age} hobby= {this.state.persons[0].hobby}/>
        <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age} hobby= {this.state.persons[1].hobby}/>
        <Footer />
      </div>
    )
  }
}

export default App
