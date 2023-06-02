import React from 'react'
import './Pokecard.css'

const poke_id = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${poke_id}${this.props.id}.png`

    return (
        <div className="Pokecard">
           <div className="Pokecard-title">{ this.props.name }</div>
           <img className="Pokecard-image">src={imgSrc }</img>
           <div className="Pokecard-data">{ this.props.type }</div>
           <div className="Pokecard-data">{ this.props.exp}</div>
        </div>
    )
  }

export default Pokecard
