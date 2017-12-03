import React, { Component } from 'react';
// import './IconPlusText.css';


class Name extends Component {
  render() {
    const name = this.props.name;

    return (
      <div className="Name">
        <i>{name}</i>
      </div>
    );
  }
}

export default Name;