import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state = {
    SideDrawerOpen : false
  }

  DrawerToggleClickHandler = () => {
    this.setState(
      (prevState) => {
        return { SideDrawerOpen : !prevState.SideDrawerOpen }
      }
    )
  };

  BackdropClickHandler = () => {
    this.setState({ SideDrawerOpen : false })
  }

  render() {

    let backdrop;
      if(this.state.SideDrawerOpen){
        backdrop   = <Backdrop click={this.BackdropClickHandler}/>
      }

    return (
      <div className="app">
        <Toolbar DrawerClickHandler={ this.DrawerToggleClickHandler }/>
        <Sidedrawer show={this.state.SideDrawerOpen} />
        {backdrop}
        <main>
          <div>This is the page content</div>
        </main>
      
      </div>
    );

    
  }
}

export default App;
