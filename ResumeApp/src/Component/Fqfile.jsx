import { useState } from 'react';
import {questions} from './Fqapi';
import Fqfile2 from './Fqfile2';
import styles from './Fqfile.module.css';
import Navbar from './Navbar';
function Fqfile( ) {
   
    const [data, setData] = useState(questions);

    return (
        <>
        <Navbar />
        <div className={styles.mainbox}>
        <section className={styles.main}>
            <h1>Quesions</h1>
        {
            data.map((curElem) => {
                const {id} = curElem;
                 return <Fqfile2  key={id} {...curElem}/>
            })
        }
        </section>
        </div>
        
        </>
    )
}

export default Fqfile;