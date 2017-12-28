import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
            <div className="Photo">
                <img src={this.props.photo} alt="mishka" />
            </div>
        )
    }
}       
//src={require("../kek.jpg")} 

export default Photo;