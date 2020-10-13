import React from 'react';
import './App.css';

import SideMenu from './components/sidemenu/side-menu.component';

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
      </div>
    );
  }
}

export default App;
