import React, { Component } from 'react';
import './App.css';
import Main from './MainInf/Main';
import Tabs from './Tabs';
// import data from './data/data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mishka3097')
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoaded: true
        })
      })
  }
  render() {
    if (this.state.isLoaded === false) 
      return null;

    const data = this.state.data;

    const tabData = [
      { label: "Основное",
        content: "kukarekkukarek kukarek kukarek kukarek kukarek kukarekkukarekkukarek"
      },
      { label: "Образование",
        content: "sfsdfsdsfsdfsdsfsdfsd sfsdfsdsfsdfsd sfsdfsd sfsdfsd sfsdfsd"
      },
      { label: "Контакты",
        content: "lolkeklolkeklolkeklolkeklolkeklolkeklolkeklolkek lolkek"
      },      
    ]
    return (
      <div className="App">
        <div className="App-intro">

          <Main photo     = {data.avatar_url}
                name      = {data.name}
                nickname  = {data.login}
                info      = {data.bio}
                work      = {data.company}
                location  = {data.location}
                email     = {data.email}
                link      = {data.blog}
          />
          <Tabs data={tabData} />
          
        </div>
      </div>
    );
  }
}

export default App;