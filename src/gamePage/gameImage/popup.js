

const PopUp = (props) => {
    
    const sendChosenCharacter = (character) => {
        props.onCharacterClick(character);
    }

    return(
        <div id='popUpContainer' style={props.style}>
            <div>
                <button onClick={() => sendChosenCharacter('chewbacca')}>Chewy</button>
                <button onClick={() => sendChosenCharacter('bb8')}>BB8</button>
                <button onClick={() => sendChosenCharacter('boba')}>Boba</button>
                <button onClick={() => sendChosenCharacter('han')}>Han</button>
            </div>
        </div>
    )
}

export default PopUp;