import styles from './Qualification.module.css';
import Inputfile_nav from "./Inputfile_nav";
import { NavLink } from 'react-router-dom';

function Qualification({curValue , setCurvalue}) {

    const inputEvent = (event) => {
        
        const {name, value} = event.target; 
    
    
        setCurvalue({
      
            ...curValue,
            [name] : value,
          
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
                <h1>EDUCATION</h1>
                <form onSubmit={onSubmits}>
                    <div className={styles.mainbox2}>
                    <h3>Education 1</h3>
                        <div className={styles.mainbox1}>
                            
                            <div className={styles.mainbox3}>

                                <input type='text' placeholder='University Name' name='uniname' onChange={inputEvent} value={curValue.uniname} />
                                <input type='text' placeholder='Degree Name' name='degreename' onChange={inputEvent} value={curValue.degreename} />
                                <input type='text' placeholder='College Name' name='clgname' onChange={inputEvent} value={curValue.clgname} />
                                <input type='text' placeholder='Location' name='location' onChange={inputEvent} value={curValue.location} />
                                <input type='date' placeholder='Passout Year' name='passyear' onChange={inputEvent} value={curValue.passyear} />
                                <input type='text' placeholder='CGPA' name='cgpa' onChange={inputEvent} value={curValue.cgpa} />

                            </div>
                            <div className={styles.btn}>
                                <button>Add More</button>
                            </div>
                        </div>
                       <NavLink  to='/certificate'>
                       <button className={styles.btn2}>Next</button>
                       </NavLink>
                        </div>

                </form>

            </div>

        </>
    )
}

export default Qualification;