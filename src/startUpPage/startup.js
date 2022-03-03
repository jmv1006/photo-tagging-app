import { Link } from "react-router-dom";
import './startup.css';

const StartUpPage = () => {

    return(
        <div id='startUpPageContainer'>
            <div id='title'>WELCOME TO THE RESISTANCE!</div>
            <div className="paragraph">
            On the dessert planet of TATOOINE, some old friends (and foes) were spotted. 
            You are tasked to find them and recruit them to the RESISTANCE. Keep aware at all times,
            as we have intel that there are some old IMPERIAL sympathizers on the planet with a mission
            to take our old friends out!
            </div>
            <Link to='game'>
                <button id='startGameButton'>START MISSION</button>
            </Link>
        </div>
    )
}

export default StartUpPage;