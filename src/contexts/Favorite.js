import React, { Component} from 'react';

export const FavoriteContext = React.createContext();

export class FavoriteProvider extends Component{
    constructor(props){
        super(props);

        this.state ={
            favoriteItem: []
        }
        this.addToFavorites = this.addToFavorites.bind(this)
    }
    addToFavorites(poke){
        console.log(poke)
        this.setState({
            favoriteItem: this.state.favoriteItem.concat(poke)
        })
        console.log(this.state.favoriteItem)
    }
    render(){
        return <FavoriteContext.Provider 
        value = {{
            favoriteItem: this.state.favoriteItem,
            addToFavorites: this.addToFavorites
        }}>
            { this.props.children }
        </FavoriteContext.Provider>
    }
}