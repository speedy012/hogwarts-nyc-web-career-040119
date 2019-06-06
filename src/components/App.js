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


  }

  render() {
    return (
      <div className="App">
          < Nav />
            <div onClick={this.sortOrFilter}>
              <button> Sort By Name</button>
              <button> Sort By Weight</button>
              <button> Greased</button>
            </div>
          < Hogs hogs={hogs}/>

      </div>
    )
  }
}

export default App;
