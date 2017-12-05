import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainInf from './MainInf/MainInf';
import Tabs from './Tabs';

class App extends Component {
  render() {
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


        <MainInf/>
        <Tabs data={tabData}/>
          

        </div>
      </div>
    );
  }
}

export default App;