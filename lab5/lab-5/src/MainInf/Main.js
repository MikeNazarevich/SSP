import React, { Component } from 'react';
// import Photo from './Photo';
import Name from './Name';
import Info from './Info';
import IconText from './IconText'

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <img src={this.props.photo} alt="kek"/>
                <Name name={this.props.name} nickname={this.props.nickname}/>
                <Info info={this.props.info}/>  
                <IconText icon="address-card-o" text={this.props.work.text}/>
                <IconText icon="map-marker" text={this.props.location.text}/>
                <IconText icon="envelope-o" text={this.props.email.text} href={this.props.email.href} />
                <IconText icon="link" href={this.props.link.text} text={this.props.link.href}/>
            </div>
        )
    }
}

export default Main;