import { useEffect, useState } from 'react';
import './feedback.css'

const FeedbackBar = (props) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [currentScore, setCurrentScore] = useState({
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setIsActive(true);
    }, [])

    useEffect(() => {
        let interval = null;

        if(isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
    
            
            if(seconds != 0 && seconds % 60 == 0) {
                setMinutes(minutes => minutes + 1);
                setSeconds(seconds => 0)
            };
            
            setCurrentScore({
                minutes: minutes,
                seconds: seconds
            });

            return () => clearInterval(interval);
        } else {
            //stop
        }
        
    }, [seconds, isActive]);

    useEffect(() => {
        props.saveScore(currentScore);
    }, [currentScore])

    return(
        <div id="feedbackContainer">
            <div id='mainFeedback'>
                {props.feedback}
            </div>
            <div id='timer'>
                {seconds < 10 ? `0${minutes}:0${seconds}` : `0${minutes}:${seconds}` } 
            </div>
        </div>
    )
}

export default FeedbackBar;