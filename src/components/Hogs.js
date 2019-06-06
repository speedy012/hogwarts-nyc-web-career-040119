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
  render() {
    // console.log(this.props.hogs)
    return (
      <div className="ui grid container">
        {this.hogsList()}
      </div>
    )
  }
}
