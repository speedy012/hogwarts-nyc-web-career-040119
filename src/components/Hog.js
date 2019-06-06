import React, { Component } from 'react';

export default class Hog extends Component {

  state = {
    details: false,
    shown: true
  }

  details = (e) => {
    // console.log(e.currentTarget);
    // console.log(this);
    this.setState({
      ...this.state.shown, details: true

    })
  }

  hide = (e) => {
    this.setState({
      ...this.state.details,
      shown: false
    })

  }


  showSomething = () => {
    if (this.state.details === false) {
      return <img src={require(`../hog-imgs/${this.props.hog.name.split(" ").map(word => {return word.toLowerCase()}).join("_")}.jpg`)} alt={this.props.hog.name}/>
    } else {
      return <div className="smallHeader">
      Specialty: {this.props.hog.specialty}
      <p></p>
      Greased: {this.props.hog.greased ? "yes" : "no"}
      <p></p>
      Weight as a ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      <p></p>
      Highest medal achieved:
      {this.props.hog['highest medal achieved']}
      </div>
    }
  }

  showContainer = () => {
    if (this.state.shown) {

    return <div className='ui eight wide column' key={this.props.hog.name}
            id={this.props.hog.name}
            className="pigTile"
            onClick={this.details}>
            <h3>{this.props.hog.name}</h3>
            <button onClick={this.hide}>Hide</button>
            {this.showSomething()}
          </div>
    } else {



    }

  }

  render() {
    return (
      <div>
        {this.showContainer()}
      </div>
    )
  }
}
