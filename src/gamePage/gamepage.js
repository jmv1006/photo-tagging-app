import './gamepage.css'
import charactersArray from './characters';
import GameImage from './gameImage/gameImage';
import { useEffect, useState } from 'react';
import FeedbackBar from './feedbackBar/feedbackBar';
import GameOver from '../gameover/gameover';

const GamePage = () => {
    const [feedback, setFeedback] = useState('Find Someone!');
    const [gameOver, setGameOver] = useState(false);
    const [finalScore, setFinalScore] = useState('');

    useEffect(() => {
    }, [gameOver])

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

    const foundAllCharacters = () => {
        setGameOver(true);
    }

    const setScore = (score) => {
        setFinalScore(score);
    }   

    const skipToGameOver = () => {
        setGameOver(true);
    }

    return(
        <div id='mainPageContainer'>
            {gameOver ? 
            
            <GameOver finalScore={finalScore}/>
            
            :
            <div id='gamePageContainer'>
                <div id='charactersContainer'>
                {characters}
                </div>
                <FeedbackBar  saveScore={setScore} feedback={feedback}/>
                <GameImage gameIsOver={foundAllCharacters} setFeedback={changeFeedback} darkenCharacter={darkenCharacter}/>
                <button onClick={skipToGameOver}>Skip to over</button>
            </div>
            }
            
        </div>
    )
}

export default GamePage;