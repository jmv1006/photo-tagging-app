import './gamepage.css'
import gamePhoto from './starwarswaldo.jpeg';

const GamePage = () => {

    return(
        <div id='gamePageContainer'>
            Main Game Page
            <div id='charactersContainer'>Characters go here</div>
            <div id='gamePhotoContainer'>
               <img src={gamePhoto} id='gamePhoto'></img>
            </div>
        </div>
    )
}

export default GamePage;