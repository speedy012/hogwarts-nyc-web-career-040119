import React, { Component } from 'react';

export default class Hog extends Component {



  render() {
    // console.log(this.props)
    return (
      <div className="pigTile">
        <h3>{this.props.hog.name}</h3>
      </div>
    )
  }
}
