import React, { Component } from 'react';
// import './IconPlusText.css';


class Nickname extends Component {
  render() {
    const nickname = this.props.nickname;

    return (
      <div className="Nickname">
        <i>{nickname}</i>
      </div>
    );
  }
}

export default Nickname;