import React, { Component } from 'react';

export default class Hog extends Component {



  render() {

    return (
      <div className="pigTile">

        <h3>{this.props.hog.name}</h3>

         <img src={require(`../hog-imgs/${this.props.hog.name.split(" ").map(word => {
           return word.toLowerCase()
        }).join("_")}.jpg`)} alt={this.props.hog.name}/>
      </div>
    )
  }
}
