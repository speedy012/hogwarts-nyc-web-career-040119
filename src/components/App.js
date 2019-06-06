import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogs from './Hogs.js'
class App extends Component {



  render() {
    return (
      <div className="App">
          < Nav />
          < Hogs hogs={hogs}/>

      </div>
    )
  }
}

export default App;
