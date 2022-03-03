import './gamepage.css'
import charactersArray from './characters';
import GameImage from './gameImage/gameImage';
import { useEffect, useState } from 'react';

const GamePage = () => {
  

    const characters = charactersArray.map((character) => 
        <div className='characterPhotoContainer' key={character.number}>
            <img src={character.image} id={character.name} className='characterPhoto'></img>
        </div>
    );

    const darkenCharacter = (character) => {
        const chosenCharacter = document.getElementById(`${character}`);
        chosenCharacter.style.filter = 'brightness(50%)';
    };
    
    return(
        <div id='gamePageContainer'>
            Writing
            <div id='charactersContainer'>
                {characters}
            </div>
            <GameImage darkenCharacter={darkenCharacter}/>
        </div>
    )
}

export default GamePage;