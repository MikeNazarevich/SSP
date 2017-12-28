import React, { Component } from 'react';
import './App.css';
import Main from './MainInf/Main';
import Tabs from './Tabs';
import data from './data/data.json';

class App extends Component {
  render() {
    const tabData = [
      { label: "Основное",
        content: "lolkeklolkeklolkeklolkeklolkeklolkeklolkeklolkek"
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


        <Main photo     = {data.photo}
              name      = {data.name}
              nickname  = {data.nickname}
              info      = {data.info}
              work      = {data.contacts.work}
              location  = {data.contacts.location}
              email     = {data.contacts.email}
              link      = {data.contacts.link}
        />
        <Tabs data={tabData} />
          

        </div>
      </div>
    );
  }
}

export default App;