import {NavLink} from 'react-router-dom';
function Navbar()  {
    return (
        <>
        <header className="head">
            
            <nav className="main_nav">
             <h1>📚 RESUMEBUILDER</h1>
                <ul>
                <li>
                  <NavLink to="/" >Home</NavLink>
                </li>

                <li>
                  <NavLink to="/resume">Resume</NavLink>
                </li>

                <li>
                  <NavLink to="/fqfile">FQ</NavLink>
                </li>
                    
                </ul>

                {/* <div className="btn">
                    <button>Sign In</button>
                </div> */}
            </nav>
        </header>

        </>
    )
}
export default Navbar;