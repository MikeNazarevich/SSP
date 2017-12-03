import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainInf from './MainInf/MainInf';

class Tabs extends Component {
  state = {
    activeIndex: 0
  }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  renderTabs() {
    const { data } = this.props;
    return data.map((tab, index) => {
      const isActive = this.state.activeIndex === index
      return (
        <div 
          key={index}
          className={isActive ? 'tab active' : 'tab'}
          onClick={() => this.selectTabIndex(index)}
        >{tab.label}
        </div>
      )
    })
  }

  renderPanel() {
    const { data } = this.props;
    const { activeIndex } = this.state;
    return <div>{data[activeIndex].content}</div>
  }

  render() {
    return (
      <div className="Tabs">
        <div className="tabs">
          {this.renderTabs()}
        </div>
        <div className="panels">
          {this.renderPanel()}
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    const tabData = [
      { label: "kek1",
        content: "kukarek"
      },
      { label: "kek2",
        content: "sfsdfsd"
      },
      { label: "kek3",
        content: "lolkek"
      },      
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">


        <MainInf/>
        <Tabs data={tabData}/>
          

        </div>
      </div>
    );
  }
}

export default App;