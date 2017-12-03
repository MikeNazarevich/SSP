import React, { Component } from 'react';
// import './IconPlusText.css';
import Icon from '../Icon/Icon';
import Text from '../Text';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <Icon icon="address-card-o"/>
        <Text text="@facebook"/>

        <Icon icon="map-marker"/>
        <Text text="London, UK"/>

        <Icon icon="envelope-o"/>
        <Text href="kudato.com" text="Dan Abraham"/>

        <Icon icon="link"/>
        <Text href="tudato.com" text="twitter.com"/>
      </div>
    );
  }
}

export default Contacts; 