import styles from './TextBox.module.css';

function TextBox(displayValue) {
   
    return(
        <>
        <input className= {styles.display} type="text" value={displayValue} readOnly ></input>
        </>
    )
}

export default TextBox;