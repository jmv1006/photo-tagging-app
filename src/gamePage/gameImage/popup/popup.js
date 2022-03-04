import './popup.css'

const PopUp = (props) => {
    
    const sendChosenCharacter = (character) => {
        props.onCharacterClick(character);
    }

    const availableCharacters = props.characters.filter(character => character.isFound === false);

    const characterOptionsToDisplay = availableCharacters.map((character) => 
        <button className='characterChoiceButton' key={character.name} onClick={() => sendChosenCharacter(character.name)}>{character.name}</button>
    );

    return(
        <div id='popUpContainer' style={props.style}>
            <div id="characterChoiceButtonsContainer">
                {characterOptionsToDisplay}
            </div>
        </div>
    )
}

export default PopUp;