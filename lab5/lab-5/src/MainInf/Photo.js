import React, { Component } from 'react';
import './MainInf.css';


class Photo extends Component {
  render() {
    const photo = this.props.photo;
    const alt = this.props.alt;
    return (
      <div className="Photo">
        <img src={require("../ZfqWW11mj64.jpg")} alt="kek"/>
      </div>
    );
  }
}

export default Photo;