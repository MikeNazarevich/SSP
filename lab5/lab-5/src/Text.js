import React, { Component } from 'react';


class Text extends Component {
    render() {
      const text = this.props.text;
      const link = this.props.link;
      
      return (
        <div className="Text">
          <a href={this.props.href}>{text}</a>
        </div>
      );
    }
  }

  
  export default Text;