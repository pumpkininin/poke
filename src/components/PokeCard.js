import { render } from '@testing-library/react';
import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'

class PokeCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            "name":"",
            "img":"",
            "type":""
        };
    }
    componentDidMount(){
        const _this = this;
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then((res) => res.json())
        .then((result) =>{
            console.log(result)
            this.setState({
                name: result.name,
                img: result.sprites.other.dream_world.front_default,
                type: result.types[0].type.name
            })
            console.log(this.state.type)
        }
        
        )
        .catch((err) =>{
            
        })
    }
    
    render(){
        const name = this.state.name;
        const img = this.state.img;
        const type = this.state.type;
        return(
            <Card style={{ width: '18rem', display: 'inline-block', margin: '1rem' }}>
                <Card.Img variant="top" style={{height:'18rem'}} src={img} />
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text>
                        <strong>Type: {type}</strong>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default PokeCard;