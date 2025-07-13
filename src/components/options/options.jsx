import css from "./options.module.css"



const OptionsUi = ({ onUpdateFeedback, onReset, totalFeedback }) => {

    return (
        <div className={css.div }>
             <button type="button" onClick={() => onUpdateFeedback("good")} >Good</button>

             <button type="button" onClick={() => onUpdateFeedback("neutral")}>Neutral</button>

            <button type="button" onClick={() => onUpdateFeedback("bad")}>Bad</button>

            { totalFeedback > 0 && ( <button type="button" onClick={onReset}>Reset</button>)}
            </div>
    )
} 

export default OptionsUi