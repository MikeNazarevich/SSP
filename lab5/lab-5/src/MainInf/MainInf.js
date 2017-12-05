import React, { Component } from 'react';
// import './IconPlusText.css';
import Photo from './Photo';
import Name from './Name';
import Nickname from './Nickname';
import Info from './Info';
import Contacts from './Contacts/Contacts';


class MainInf extends Component {
  render() {
    return (
      <div className="MainInf">
        <Photo />
        <Name name='Mikhail Nazarevich'/>
        <Nickname nickname='mishka3097'/>
        <Info info='lolkekcheburelolkekcheburek lolkekcheburelolkekcheburek lolkekcheburelolkekcheburek'/>

        <Contacts icon="address-book-o" text="@BSTU"/>
        <Contacts icon="map-marker" text="London, UK"/>
        <Contacts icon="envelope-o" text="Dan Abraham"/>
        <Contacts icon="link" text="twitter.com"/>
        

      </div>
    );
  }
}

export default MainInf;