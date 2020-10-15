import React from 'react';

import SideMenu from './components/sidemenu/side-menu.component';
import MainContainerWrapper from './components/main-container-wrapper/main-container-wrapper.component';

import './App.scss';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'Dashboard'
    }
  }

  render(){
    return (
      <div className="App">
        <SideMenu activeItem={this.state.activeItem}/>
        <MainContainerWrapper />
      </div>
    );
  }
}

export default App;
