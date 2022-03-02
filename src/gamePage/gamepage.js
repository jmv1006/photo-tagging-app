import './gamepage.css'
import charactersArray from './characters';
import { useEffect, useState } from 'react';
import GameImage from './gameImage';

const GamePage = () => {
    const characters = charactersArray.map((character) => 
        <div className='characterPhotoContainer' key={character.number}>
            <img src={character.image} className='characterPhoto'></img>
        </div>
    );

    return(
        <div id='gamePageContainer'>
            Main Game Page
            <div id='charactersContainer'>
                {characters}
            </div>
            <GameImage />
        </div>
    )
}

export default GamePage;