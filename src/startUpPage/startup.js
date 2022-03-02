import { Link } from "react-router-dom";

const StartUpPage = () => {

    return(
        <div>
            Start Up Page Here 
            <Link to='game'>
                <button>Go to game</button>
            </Link>
        </div>
    )
}

export default StartUpPage;