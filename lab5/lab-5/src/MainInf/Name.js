import React, { Component } from 'react';

class Name extends Component {
    render() {
        return (
            <div className="Name">
                <p className="name">{this.props.name}</p>
                <p className="nickname">{this.props.nickname}</p>
            </div>
        )
    }
}

export default Name;