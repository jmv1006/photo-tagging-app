import './feedback.css'

const FeedbackBar = (props) => {

    return(
        <div id="feedbackContainer">
            <div id='mainFeedback'>
                {props.feedback}
            </div>
            <div id='timer'>
                0:00
            </div>
        </div>
    )
}

export default FeedbackBar;