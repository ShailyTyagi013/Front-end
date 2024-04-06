import { useState } from "react";
import styles from './Fqfile.module.css';
function Fqfile2({question, answer}){

    const [show, setShow] = useState(false);
    return(
        <>
       <div className={styles.mainbox2}>
        <p onClick={() => setShow(!show)}>{show? "➖": "➕"}</p>
        <h3>{question}</h3>
       </div>
       {show && <p className={styles.answer}>{answer}</p>}
        </>
    )
}
export default Fqfile2;