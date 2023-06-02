import React from 'react';
import Pokecard from './Pokecard'
import './pokedex.css';

function Pokedex(props) {
       let winMessage = null
       if (props.isWinner) {
         winMessage = <p className="Pokedex-winner">You Win!</p>
       }

       return (
        <div className="Pokedex">
           <h2 className="Pokedex-title">Pokedex</h2>
           <div className="Pokedex-cards">
             {props.pokemon && props.pokemon.map((p) =>
              <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            )}
           </div>
           <h4>Total experience: {props.exp}</h4>
           {winMessage}
        </div>
     )
}

export default Pokedex
