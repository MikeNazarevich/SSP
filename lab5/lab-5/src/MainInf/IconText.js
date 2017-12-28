import React, { Component } from 'react';
import Icon from './Icon';
import Text from './Text';

class IconText extends Component {
    render() {
        return (
            <div className="IconText">
                <Icon icon={this.props.icon}/>
                <Text href={this.props.href} text={this.props.text}/>
            </div>
        )
    }
}

export default IconText