import { useState, useEffect } from 'react';
import gamePhoto from '../imgs/starwarswaldo.jpeg';
import { getCharacters, db } from '../../firebase'
import './gameimage.css'
import PopUp from './popup/popup';

const GameImage = (props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [popUpStyle, setPopUpStyle] = useState({});
    const [xPos, setxPos] = useState('');
    const [yPos, setyPos] = useState('');

    useEffect(() => {
        getCharacters(db).then((value) => processData(value));

        function processData(data) {
            data.map(createCharacterObjects)
        };

        function createCharacterObjects(data) {
            let newCharacterObj = {
                name: data.charactername,
                coordinates: data.coordinates,
                isFound: false
            };

            const editedArr = characters;
            editedArr.push(newCharacterObj);
            setCharacters(editedArr);
        };

    }, []);

    useEffect(() => {

        const isCharacterFound = (character) => character.isFound === true;
        if(characters.length > 0 && characters.every(isCharacterFound)) {
            props.gameIsOver();
        };

    }, [characters])

    const handleImageClick = (e) => {
        let offsetX = ((e.pageX / e.target.offsetWidth) * 100).toFixed(2);
        //310px is the height of all elements above image. Can be changed later.
        let offsetY = (((e.pageY - 310) / e.target.offsetHeight) * 100).toFixed(2);

        setPopUpStyle({
            position: 'absolute',
            left: `${e.clientX}px`,
            top: `${e.pageY}px`,
            width: 'auto',
            height: 'auto',
            display: 'flex',
            border: '1px solid cyan',
        });
        setIsClicked(true);
        
        setxPos(offsetX);
        setyPos(offsetY);
    };

    const handleCharacterChoice = (chosenCharacter) => {
        checkIfCharacter(xPos, yPos, chosenCharacter);
    }

    const checkIfCharacter = (x, y, characterName) => {
        const xToNumber = Number(x);
        const yToNumber = Number(y);

        let characterIndex = characters.findIndex((character) => character.name === characterName);
        let xcoords = characters[characterIndex].coordinates[0];
        let ycoords = characters[characterIndex].coordinates[1];

        if((xToNumber >= xcoords.xcoord1 && xToNumber <= xcoords.xcoord2) && (yToNumber >= ycoords.ycoord1 && yToNumber <= ycoords.ycoord2)) {
            props.darkenCharacter(characterName);
            props.setFeedback(`YOU FOUND ${characterName.toUpperCase()}!`);
            
            let tempArr = [...characters];
            tempArr[characterIndex].isFound = true
            setCharacters(tempArr);
            setIsClicked(false);
        } else {
            props.setFeedback('NO ONE THERE!');
            setIsClicked(false);
        };
        
    };

    return((
        <div id='gameContainer'>
            <div id='gamePhotoContainer'>  
                <img src={gamePhoto} id='gamePhoto' onClick={handleImageClick}></img>
                {isClicked ? <PopUp onCharacterClick={handleCharacterChoice} style={popUpStyle} characters={characters} /> : null}
            </div>
        </div>
    ))
}

export default GameImage;