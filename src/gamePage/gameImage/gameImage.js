import { useState, useEffect } from 'react';
import gamePhoto from '../imgs/starwarswaldo.jpeg';
import { getCharacters, db } from '../../firebase'
import './gameimage.css'
import PopUp from './popup';

const GameImage = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [popUpStyle, setPopUpStyle] = useState({});

    useEffect(() => {
        getCharacters(db).then((value) => processData(value));

        function processData(data) {
            data.map(doStuff)
        };

        function doStuff(data) {
            let newCharacterObj = {
                name: data.charactername,
                coordinates: data.coordinates
            };

            const editedArr = characters;
            editedArr.push(newCharacterObj);
            setCharacters(editedArr);
        };

    }, []);


    const handleImageClick = (e) => {
        let offsetX = ((e.pageX / e.target.offsetWidth) * 100).toFixed(2);
        //232 is the height of all elements above image. Can be changed later.
        let offsetY = (((e.pageY - 232) / e.target.offsetHeight) * 100).toFixed(2);

        console.log(offsetX, offsetY)

        setPopUpStyle({
            position: 'absolute',
            left: `${e.clientX - 20}px`,
            top: `${e.clientY - 30}px`,
            backgroundColor: 'cyan',
            width: '2rem',
            height: '3rem',
            border: '2px solid cyan'
        });
        //setIsClicked(true);

        let chosenCharacter = prompt('Who?');
        checkIfCharacter(offsetX, offsetY, chosenCharacter);

        const chewyCoords = [[80.45, 82.99], [77.55, 82.64]]
        const bb8Coords = [[36.87, 39.34], [80.08, 83.36]]
        const bobaCoords = [[88.70, 91.20], [81.68, 85.10]]
    };


    const checkIfCharacter = (x, y, characterName) => {
        const xToNumber = Number(x);
        const yToNumber = Number(y);

        let characterIndex = characters.findIndex((character) => character.name === characterName);
        let xcoords = characters[characterIndex].coordinates[0];
        let ycoords = characters[characterIndex].coordinates[1];

        if((xToNumber >= xcoords.xcoord1 && xToNumber <= xcoords.xcoord2) && (yToNumber >= ycoords.ycoord1 && yToNumber <= ycoords.ycoord2)) {
            alert(`Found ${characterName}!`)
            props.darkenCharacter(characterName);
            setIsClicked(false);
        } else {
            alert('Nope!')
            setIsClicked(false);
        };
        
    };

    return((
        <div id='gameContainer'>
            <div id='gamePhotoContainer'>  
                <img src={gamePhoto} id='gamePhoto' onClick={handleImageClick}></img>
                {isClicked ? <PopUp style={popUpStyle}/> : null}
            </div>
        </div>
    ))
}

export default GameImage;