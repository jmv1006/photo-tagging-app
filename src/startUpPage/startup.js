import { Link } from "react-router-dom";
import './startup.css';

const StartUpPage = () => {

    return(
        <div id='startUpPageContainer'>
            <div id='title'>WELCOME TO THE RESISTANCE!</div>
            <div className="paragraph">
            The FIRST ORDER has began to spread its influence across the galaxy. They intend to 
            use the DARK SIDE of the force in order to coerce others into doing what they wish. They must
            be stopped or else dire consequences could be brought onto the galaxy...
            </div>
            <div className="paragraph">
            On the desert planet of TATOOINE, some old friends (and foes) were spotted. 
            You are tasked to find them and recruit them to the RESISTANCE. Keep aware at all times,
            as we have intel that there are some FIRST ORDER sympathizers on the planet with a mission
            to take our old friends out! 
            </div>
            <div className="paragraph">
            A piece of intel we have recieved indicated that they were spotted hiding out in a JAWA marketplace.
            Look closely, recruit. Their help is vital to our mission. We have equipped you with all the equipment you need,
            but keep in mind that the faster you spot them, the better off it is for you. TATOOINE can be a very dangerous place
            if you are at the wrong place at the wrong time...
            </div>
            <Link to='game'>
                <button id='startGameButton'>START MISSION</button>
            </Link>
        </div>
    )
}

export default StartUpPage;