import styles from "./Experience.module.css";
import { NavLink } from "react-router-dom";
import Inputfile_nav from "./Inputfile_nav";
import { useState } from "react";

function Experience({curValue, setCurvalue}) {
console.log('curValue=',curValue)
    const template = {
        companyname: "",
        jobtitle: "",
        description: "",
    };
 
    const [users, setUsers] = useState([template]);

    const addMore = () => {

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
    
    const onSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
        <>
            <Inputfile_nav />
            <div className={styles.mainbox}>
                <h1>Work Experience</h1>
                <form onSubmit={onSubmit}>
                    <div className={styles.mainbox2}>
                        <p>Experience </p>
                       
                        <div className={styles.mainbox3}>
                            {users.map((user,index) => (
                                <div key={index} className={styles.inputbox}>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Company Name"
                                        name="companyname" 
                                        onChange={inputEvent} 
                                        value={curValue.companyname !== undefined ? curValue.companyname : ""} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Enter Job Title" 
                                        name="jobtitle" 
                                        onChange={inputEvent} 
                                        value={curValue.jobtitle !== undefined ? curValue.jobtitle : ""}
                                    />
                                    
                                    <div className={styles.description}>
                                        <input 
                                            type="text" 
                                            placeholder="Enter Description" 
                                            name="description" 
                                            onChange={inputEvent} 
                                            value={curValue.description !== undefined ? curValue.description : ""} 
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className={styles.addbtn}>
                                <button onClick={addMore}>Add More</button>
                            </div>
                        </div>
                 
                       <NavLink to="/qualification">
                            <button className={styles.btn}>Next</button>
                       </NavLink>

                    </div>
                </form>
            </div>
        </>
    )
}
export default Experience;