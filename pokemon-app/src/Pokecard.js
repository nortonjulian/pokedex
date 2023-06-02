import React from 'react'
import './Pokecard.css'

const poke_id = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${poke_id}${props.id}.png`

    return (
        <div className="Pokecard">
           <div className="Pokecard-title">{ props.name }</div>
           <img className="Pokecard-image">src={imgSrc }</img>
           <div className="Pokecard-data">{ props.type }</div>
           <div className="Pokecard-data">{ props.exp}</div>
        </div>
    )
  }

export default Pokecard
