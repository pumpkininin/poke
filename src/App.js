import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PokeCard from "./components/PokeCard"
import { Component } from 'react';
class App extends Component{
  constructor(){
    super();
    this.state = {
      "ids" : [12,41,54,23,62,31,54,12,54,12,54,76,89,215,72]
      
    };
  }
  
  render(){
    const ids = this.state.ids;
    return (
    
      <div className="App">
        <Header/>
        
        <div class ="cards-container">
        
        {ids.map((id) => <PokeCard id={id}/>)}
        
        
        
        </div>
      </div>
    );
  }
}

export default App;
