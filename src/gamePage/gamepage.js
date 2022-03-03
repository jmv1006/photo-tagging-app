import './gamepage.css'
import charactersArray from './characters';
import GameImage from './gameImage/gameImage';
import { useEffect, useState } from 'react';
import FeedbackBar from './feedbackBar/feedbackBar';

const GamePage = () => {
    const [feedback, setFeedback] = useState('Choose Someone!')

    const characters = charactersArray.map((character) => 
        <div className='characterPhotoContainer' key={character.number}>
            <img src={character.image} id={character.name} className='characterPhoto'></img>
        </div>
    );

    const darkenCharacter = (character) => {
        const chosenCharacter = document.getElementById(`${character}`);
        chosenCharacter.style.filter = 'brightness(50%)';
    };
    
    const changeFeedback = (feedback) => {
        setFeedback(feedback)
    };

    return(
        <div id='gamePageContainer'>
            Writing
            <div id='charactersContainer'>
                {characters}
            </div>
            <FeedbackBar feedback={feedback}/>
            <GameImage setFeedback={changeFeedback} darkenCharacter={darkenCharacter}/>
        </div>
    )
}

export default GamePage;