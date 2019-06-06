import React, { Component } from 'react';
import Hog from './Hog.js';

export default class Hogs extends Component {

  hogsList = () => {
    return this.props.hogs.map(hog => {
      // console.log(hog)
      return (
        < Hog hog={hog} />
      )
    })
  }
  // <div className="pigTile">
  // <h3>{hog.name}</h3>
  //
  // </div>
  // <img src={`../hog-imgs/${hog.name}.jpg`} alt={this.props.snack.name}/>

  render() {
    // console.log(this.props.hogs)
    return (
      <div>
        {this.hogsList()}
      </div>
    )
  }
}
