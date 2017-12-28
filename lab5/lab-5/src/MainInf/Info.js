import React, { Component } from 'react';

class Info extends Component {
    render() {
        return(
            <div className="Info">
                <p>{this.props.info}</p>
            </div>
        )
    }
}

export default Info;