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
                <IconText icon="address-card-o" text={this.props.work}/>
                <IconText icon="map-marker" text={this.props.location}/>
                <IconText icon="envelope-o" text={this.props.email} href={this.props.email} />
                <IconText icon="link" href={this.props.link} text={this.props.link}/>
            </div>
        )
    }
}

export default Main;