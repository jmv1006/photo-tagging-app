import { useState, useEffect } from 'react';
import gamePhoto from '../imgs/starwarswaldo.jpeg';
import { getCharacters, db } from '../../firebase'
import './gameimage.css'

const GameImage = (props) => {

    const [chewyCoordinates, setChewyCoordinates] = useState({});

    useEffect(() => {
        getCharacters(db).then((value) => processData(value));

        function processData(data) {
            setChewyCoordinates(data[0].coordinates)
        }

    }, []);


    const handleImageClick = (e) => {
        let offsetX = ((e.pageX / e.target.offsetWidth) * 100).toFixed(2);
        let offsetY = (((e.pageY - 232) / e.target.offsetHeight) * 100).toFixed(2);
        checkIfCharacter(offsetX, offsetY)
        const chewyCoords = [[80.45, 82.99], [77.55, 82.64]]
    };

    const checkIfCharacter = (x, y) => {
        const xToNumber = Number(x);
        const yToNumber = Number(y);

        if((xToNumber >= chewyCoordinates[0].xcoord1 && xToNumber <= chewyCoordinates[0].xcoord2) && (yToNumber >= chewyCoordinates[1].ycoord1 && yToNumber <= chewyCoordinates[1].ycoord2)) {
            alert('FOUND')
            props.addToScore();
        }
    }

    return((
        <div id='gamePhotoContainer'>  
            <img src={gamePhoto} id='gamePhoto' onClick={handleImageClick}></img>
        </div>
    ))
}

export default GameImage;