import { useEffect, useState } from 'react';
import { db, getScores, addScoreToDB } from '../firebase';
import './gameover.css'

const GameOver = (props) => {

    const [name, setName] = useState('');
    const [userScore, setUserScore] = useState({})
    const [scores, setScores] = useState([]);
    const [inputtedName, setInputtedName] = useState(false);

    useEffect(() => {
        setUserScore(props.finalScore);
    }, [])

    useEffect(() => {
        if(inputtedName === true) {
            getScores(db).then((value) => processScores(value));
            
            function processScores(score) {
                score.map(extractData)
            };

            function extractData(data) {
                let scoreObj = {
                    name: data.name,
                    score: data.score
                }

                let tempArr = scores;
                tempArr.push(scoreObj);
                setScores([...tempArr])
            };
        };
       
    }, [inputtedName]);


    const handleChange = (e) => {
        setName(e.target.value)
    };

    const submitScore = (e) => {
        e.preventDefault();
        //show scoreboard
        let playerName = name;
        let scoreModule = {
            name: playerName,
            score: userScore
        }
        console.log(scoreModule);
        addScoreToDB(scoreModule);
        setInputtedName(true);
    };


    const scoresDisplay = scores.map((scoreObject) => 
        <div className='scoreLine' key={scoreObject.name}>
            <div id='scoreName'>{scoreObject.name}</div>
            <div id='score'>{scoreObject.score.minutes} minute(s) & {scoreObject.score.seconds} seconds</div>
        </div>
    )

    return(
        <div id="gameOverContainer">
            <div id='finalScoreDisplay'>
                CONGRATULATIONS RECRUIT! YOUR FINAL SCORE IS {props.finalScore.minutes} MINUTE(S) AND {props.finalScore.seconds} SECONDS!
            </div>

            {inputtedName ? 
                <div id='scoreboardContainer'>
                    SCOREBOARD
                    {scoresDisplay}
                </div>
                :
                <div id='highScoreInputContainer'>
                    Input your name below to save your score!
                    <form onSubmit={submitScore} id='scoreInputForm'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name="name" onChange={handleChange} value={name}></input>
                        <button id='submitScoreButton' type='submit'>Submit</button>
                    </form>
                </div>
            }

        </div>
    )
}

export default GameOver;