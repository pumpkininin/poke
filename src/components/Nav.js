import React, {Component} from 'react'


export default function Nav(props){
    return  <div style ={{marginBottom: '5rem'}}>
                <button disabled={props.page <= 0} id="prev" onClick = {props.prevPage}>&larr;</button>
                <strong>{props.page}</strong>/<span>10</span>
                <button disabled={props.currentIndex >= 9} id="next" onClick= {props.nextPage} >&rarr;</button>
            </div>;
        
    
}
