import styles from './Experience.module.css'
import { NavLink } from "react-router-dom";
import Inputfile_nav from "./Inputfile_nav";
import { useState } from 'react';

function Experience({curValue , setCurvalue}) {

   const template = {
    companyname: "",
        jobtitle: "",
        discription: "",
   };
    const [users, setUsers] = useState([template]);
    const addUser=() => {

        setUsers([...users, 'template'])
        // alert("done")
    };


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
                <h1>Work Experience</h1>
                <form onSubmit={onSubmits}>
                    <div className={styles.mainbox2}>
                        <p>Experience </p>
                        <div className={styles.mainbox3}>
                            {users.map((user,index) => (
                                <div  key={index} className={styles.inputbox}>
                                <input   type="text" placeholder='Company Name'  name='companyname' onChange={inputEvent} value={curValue.companyname} />
                                <input   type="text" placeholder='Job Title'  name='jobtitle' onChange={inputEvent} value={curValue.jobtitle} />
                                <div className={styles.discription}>
                                <input  type="text"  placeholder='Discription'  name='discription' onChange={inputEvent} value={curValue.discription} />
                                </div>
                                
                                </div>
                                
                            ))}
                            <div className={styles.addbtn}>
                                <button onClick={addUser} >Add More</button>
                            </div>

                        </div>

                       <NavLink to='/qualification'>
                       <button  className={styles.btn}>Next</button>
                       </NavLink>
                    </div>
                </form>

            </div>
           
            
            

            
        </>
    )
}

export default Experience;