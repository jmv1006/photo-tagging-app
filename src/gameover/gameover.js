import { useEffect } from 'react';
import './gameover.css'

const GameOver = (props) => {

    useEffect(() => {
        console.log(props.finalScore)
    }, [])

    return(
        <div id="gameOverContainer">
            Game is Over
            YOUR FINAL SCORE IS
        </div>
    )
}

export default GameOver;