import css from "./feedback.module.css"

const FeedbackUi = ({clicks, onPositive}) => {
    return (
        <ul>
            <li>
                <p>Good:{clicks.good}</p>
            </li>
            <li>
                <p>Neutral:{clicks.neutral }</p>
            </li>
            <li>
                <p>Bad:{clicks.bad }</p>
            </li>
            <li>
                <p>Positive:%{onPositive }</p>
            </li>
       </ul>

   )
}

export default FeedbackUi 