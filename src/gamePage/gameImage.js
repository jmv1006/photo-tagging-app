import { useState } from 'react';
import gamePhoto from './imgs/starwarswaldo.jpeg';

const GameImage = () => {
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [coordinates, setCoordinates] = useState([]);

    const handleImageClick = (e) => {
        let offsetX = ((e.target.offsetWidth / e.pageX) * 100).toFixed(3);
        let offsetY = ((e.target.offsetHeight / e.pageY) * 100).toFixed(3);

        console.log(offsetX, offsetY)
    }

    return((
        <div id='gamePhotoContainer'>  
            <img src={gamePhoto} id='gamePhoto' onClick={handleImageClick}></img>
        </div>
    ))
}

export default GameImage;