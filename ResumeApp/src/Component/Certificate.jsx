import { NavLink } from 'react-router-dom';
import styles from './Certificate.module.css';
import Inputfile_nav from "./Inputfile_nav";

function Certificate({ curValue, setCurvalue }) {

    const inputEvent = (event) => {

        const { name, value } = event.target;


        setCurvalue({

            ...curValue,
            [name]: value,

        });
    };

    const onSubmits = (event) => {
        event.preventDefault();


        // alert("form submitted");
    };


    return (
        <>
            <Inputfile_nav />
            <div className={styles.mainbox}>
                <h1>Certificate and Skills</h1>
                <form onSubmit={onSubmits}>
                    <div className={styles.mainbox2}>



                        <div className={styles.mainbox3}>

                            <input type='text' placeholder='Course' name='course1' onChange={inputEvent} value={curValue.course1} />
                            <input type='text' placeholder='Certificate URL' name='courselink' onChange={inputEvent} value={curValue.courselink} />

                        </div>

                        <div className={styles.btn}>
                                <button>Add More</button>
                            </div>
                            <div className={styles.skillbox}>
                                <h2>Technical skills</h2>
                                <input type='text' placeholder='Enter Your Technical Skills' name='skills' onChange={inputEvent} value={curValue.skills} />

                                <h2>Interpersonal skills</h2>
                                <input type='text' placeholder='Enter Your Interpersonal Skills' name='skills2' onChange={inputEvent} value={curValue.skills2} />

                            </div>
                        
                        <NavLink to='/preview'>
                        <button className={styles.btn2}>Next</button>
                        </NavLink>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Certificate;
