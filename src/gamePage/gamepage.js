import './gamepage.css'
import charactersArray from './characters';
import GameImage from './gameImage/gameImage';
import { useEffect, useState } from 'react';

const GamePage = () => {
    const[score, setScore] = useState(0)

    const characters = charactersArray.map((character) => 
        <div className='characterPhotoContainer' key={character.number}>
            <img src={character.image} className='characterPhoto'></img>
        </div>
    );

    const addScore = () => {
        setScore(score + 1);
    };
    
    return(
        <div id='gamePageContainer'>
            Score: {score}
            <div id='charactersContainer'>
                {characters}
            </div>
            <GameImage addToScore={addScore}/>
        </div>
    )
}

export default GamePage;