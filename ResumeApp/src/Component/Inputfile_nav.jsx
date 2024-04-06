import {NavLink} from 'react-router-dom';
 function Inputfile_nav() {
    
    return(
        <>
     <header className="head">
            
            <nav className="main_nav">
            
                <ul>
                <li>
                  <NavLink to="/inputfile" >Personal Information</NavLink>
                </li>

                <li>
                  <NavLink to="/experience" >Experience/Projects</NavLink>
                </li>


                <li>
                  <NavLink to="/qualification" >Qualification</NavLink>
                </li>


                <li>
                  <NavLink to="/certificate" >Certificate and Skills</NavLink>
                </li>


                {/* <li>
                  <NavLink to="/skills" >Key Skills</NavLink>
                </li> */}


                </ul>

                
            </nav>
        </header>
        </>
    )
 }

 export default Inputfile_nav;