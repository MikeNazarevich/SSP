import React, { Component } from 'react';

class Icon extends Component {
    render() {
        const fullIcon = "fa fa-" + this.props.icon;
        return (
            <div className="Icon">
                <i className={fullIcon}/>
            </div>
        )
    }
}
export default Icon;