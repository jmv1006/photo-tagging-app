import { useState } from 'react';
import gamePhoto from './imgs/starwarswaldo.jpeg';

const GameImage = () => {
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [coordinates, setCoordinates] = useState([]);

    const handleImageClick = (e) => {
        let offsetX = ((e.pageX / e.target.offsetWidth) * 100).toFixed(2);
        let offsetY = ((e.pageY / e.target.offsetHeight) * 100).toFixed(2);

        let targetXCoords = [80.45, 82.99]
        let targetYCoords = [127.96, 132.47]
    
        if((offsetX >= targetXCoords[0] && offsetX <= targetXCoords[1]) && (offsetY >= targetYCoords[0] && offsetY <= targetYCoords[1])) {
            console.log('found')
        }
    }

    return((
        <div id='gamePhotoContainer'>  
            <img src={gamePhoto} id='gamePhoto' onClick={handleImageClick}></img>
        </div>
    ))
}

export default GameImage;