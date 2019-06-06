import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogs from './Hogs.js'

class App extends Component {

  state ={
    hogs: hogs
  }

  sortOrFilter = (e) => {
    // console.log(e.target.id)
    if (e.target.id === 'name') {
      const newHogs = this.state.hogs.sort((a,b) => a.name.localeCompare(b.name));
      this.setState({
        hogs: newHogs
      })
    } else if (e.target.id === 'weight') {
      const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      const newHogs = this.state.hogs.sort((a,b) => a[weight] - b[weight])

      this.setState({
        hogs: newHogs
      })
    } else if (e.target.id === 'greased') {
      const newHogs = this.state.hogs.filter(hog => hog.greased)

      this.setState({
        hogs: newHogs
      })
    }

  }

  render() {
    return (
      <div className="App">
          < Nav />
            <div onClick={this.sortOrFilter}>
              <button id='name'> Sort By Name</button>
              <button id='weight'> Sort By Weight</button>
              <button id='greased'> Greased</button>
            </div>
          < Hogs hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
