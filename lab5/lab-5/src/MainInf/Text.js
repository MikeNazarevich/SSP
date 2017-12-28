import React, { Component } from 'react';
 
class Text extends Component {
    render() {
        return (
            <div className="Text">
                <a href={this.props.href}>{this.props.text}</a>
            </div>
        )
    }
}

export default Text;