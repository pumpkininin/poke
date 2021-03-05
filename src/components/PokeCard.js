import { render } from '@testing-library/react';
import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import {FavoriteContext} from '../contexts/Favorite'

class PokeCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            "pokemon":
                {"name":"",
                "img":"",
                "type":""}

            
        };
    }
    componentDidMount(){
        this.fetchAPI();
    }
    componentDidUpdate(prevProps){
        if(prevProps.id != this.props.id){
            this.fetchAPI();
        }
    }
    fetchAPI(){
        const _this = this;
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then((res) => res.json())
        .then((result) =>{
            let poke = {"name":result.name,
                            "img":result.sprites.other.dream_world.front_default,
                            "type":result.types[0].type.name};
            this.setState({
                pokemon:poke
            })
        }
        
        )
        .catch((err) =>{
            
        })
    }
    
    render(){
        const pokemon = this.state.pokemon
        
        
        return(
            <Card style={{ width: '18rem', display: 'inline-block', margin: '1rem' }}>
                <Card.Img variant="top" style={{height:'18rem'}} src={pokemon.img} />
                <Card.Body>
                    <Card.Title >{pokemon.name}</Card.Title>
                    <Card.Text>
                        <strong>Type: {pokemon.type}</strong>
                    </Card.Text>
                    <FavoriteContext.Consumer>
                        {({addToFavorites}) => <Button  onClick = {() => addToFavorites(pokemon)}  variant="primary">Add to favorite</Button> }
                        
                    </FavoriteContext.Consumer>
                </Card.Body>
            </Card>
        )
    }
}
export default PokeCard;