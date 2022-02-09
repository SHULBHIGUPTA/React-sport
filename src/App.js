import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import fb1 from './Photo/fb1.jpg';
import fb2 from './Photo/fb2.jpg';
import cricket from './Photo/cricket.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
     <h1>|Sport</h1>
     <div className="container">
      <Card 
      photo = {fb1}
      Heading = "Rodriguez strike denies Man Utd"
      para = "Manchester United are left frusted as Jay Rodriguez's second-half goal sees bottom club Burnley claim a battling draw at Turf Moor."
      GameName = "| FOOTBALL"
      />
      <Card 
      photo = {fb2}
      Heading = "Newcastle beat fellow strugglers Everton"
      para = "Newcastle move out of the bottom three with a huge win over fellow strugglers Everton in Frank Lampard's first Premier League game in charge."
      GameName = "| FOOTBALL" 
        />
        <Card 
       photo = {cricket}
        Heading = "Anderson & Broad left out by England"
        para = "England leave bowlers James Anderson and Stuart Broad out of their men's squad to tour the West Indies"
        GameName = "| CRICKET"
        />
        </div>
      </div>
    );
  }
}

export default App;
