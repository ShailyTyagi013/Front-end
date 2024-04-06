import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Inputfile.module.css';
import Inputfile_nav from "./Inputfile_nav";


function Inputfile( {curValue , setCurvalue}) {

  // const [curValue, setCurvalue] = useState ({
  //     fname: "",
  //     lname: "",
  //     email: "",
  //     phone: "",
  //     linked: "",
  //     git: "",
  //     address: "",
  //     summary: "",
  // });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log (event.target.name);

    const {name, value} = event.target; 


    setCurvalue({
      // console.log();

      
      
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
        <form onSubmit={onSubmits}>
          <div className={styles.mainbox2}>
            <div className={styles.mainbox3}>
              <div className={styles.main_halfbox}>
                <input type="text" placeholder='First Name' name='fname' onChange={inputEvent} value={curValue.fname}/>
                <input type="text" placeholder='Last Name' name='lname' onChange={inputEvent} value={curValue.lname} />
                <input type="email" placeholder='Enter Email' name='email' onChange={inputEvent} value={curValue.email} />
                <input type="number" placeholder='Enter Moobile Number' name='phone' onChange={inputEvent} value={curValue.phone} />
                <input type="text" placeholder='Enter LinkedIn URL' name='linked' onChange={inputEvent} value={curValue.linked} />
                <input type="text" placeholder='Enter GitHub URL' name='git' onChange={inputEvent} value={curValue.git} />

                <div className={styles.main_sechalfbox}>
                  <input type="text" placeholder='address' name='address' onChange={inputEvent} value={curValue.address} />
                </div>
              </div>

              <div className={styles.summary}>
                <h1>Summary</h1>
                <input type="text" placeholder='type here...' name='summary' onChange={inputEvent} value={curValue.summary}/>
              </div>

            </div>

            <NavLink to='/experience '>
              <button type='submit'  >Next</button>
            </NavLink>

          </div>

        </form>
      </div>
    </>
  )

}

export default Inputfile;