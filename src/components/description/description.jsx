import css from "./description.module.css"

 const Description = () => {
    return (
        <div>
            <h1 className={css.text}>Sip Happens Café</h1>
            <p className={css.text} >
                Please leave your feedback about our service by selecting one of the options below.
            </p>
        </div>
    );
};

export default Description