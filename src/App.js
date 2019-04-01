import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';
import Quotes from './components/Quotes';
import Lamp from './components/Lamp';
import NameForm from './components/NameForm';

class App extends Component {

  state = {
    working: true
  };

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const logoState = this.state.working?"App-logo":"App-logo-false"
    const homerState = this.state.working?"Homer is working, make him stop!":"Homer is not working, wake him up!!"
    const homerImage = this.state.working?"https://i.imgflip.com/nuz0r.jpg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1dpJ1z265sBvQAsg7tyKNje2XvcZlYUc7Lso-QbuPO3QXVh09Q"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoState} alt="logo" />
          <h1 className="App-title">Thomas Poil Quotes</h1>
        </header>
        <div>
          <p>Click on the button to make sure Homer does what he should!</p>
          <button onClick={this.handleClick}>{homerState}</button>
        </div>
        <img src={homerImage} alt="Homer"/>
        <Lamp on />
        <Lamp />
        <NameForm/>
        <Quote 
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes/>
      </div>
    );
  }
}

export default App;
