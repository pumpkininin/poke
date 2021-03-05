import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PokeCard from "./components/PokeCard"
import { Component } from 'react';
import Nav from './components/Nav';
import {Button} from 'react-bootstrap';
import title from './title.png';
import {FavoriteContext, FavoriteProvider} from './contexts/Favorite'

class App extends Component{
  constructor(){
    super();
    this.state = {
      "pokes":[1,2,3,4,5,6,7,8,9],
      "page":1
      
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevpage = this.prevPage.bind(this);
  }
  nextPage(){
      this.setState({
      pokes: this.state.pokes.map((index) => {return index+=9}),
      page: this.state.page+1
    });
    
  }
  prevPage = () => {
    this.setState({
      pokes: this.state.pokes.map((index) => {return index-=9}),
      page: this.state.page-1
    });
    
    
  }
  render(){
    
    const page = this.state.page;
    console.log(this.state.pokes)
    return (
      <FavoriteProvider>
        <div className="App">
          <Header/>
          <img className = "title" src = {title} />
          <div className ="cards-container">
          
          {this.state.pokes.map((poke,index) => <PokeCard id={poke} key={index}/>)}
          </div>
          <Nav page = {page} nextPage = {this.nextPage} prevPage = {this.prevPage} />
          
        </div>
      </FavoriteProvider>
    );
  }
}

export default App;
