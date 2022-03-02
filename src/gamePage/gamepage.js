import './gamepage.css'
import gamePhoto from './imgs/starwarswaldo.jpeg';
import charactersArray from './characters';
import PopUp from './popup';
import { useEffect, useState } from 'react';

const GamePage = () => {
    const [imageClicked, setImageClicked] = useState(false);

    const characters = charactersArray.map((character) => 
        <div className='characterPhotoContainer' key={character.number}>
            <img src={character.image} className='characterPhoto'></img>
        </div>
    );

    const clickedImage = () => {
        if(imageClicked === false) {
            setImageClicked(true);
        } else if (imageClicked === true) {
            setImageClicked(false);
        };
    }

    return(
        <div id='gamePageContainer'>
            Main Game Page
            <div id='charactersContainer'>
                {characters}
            </div>
            <div id='gamePhotoContainer'>
               <img src={gamePhoto} id='gamePhoto' onClick={clickedImage}></img>
            </div>
            {imageClicked ? <PopUp /> : null}
        </div>
    )
}

export default GamePage;