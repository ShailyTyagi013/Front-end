// import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


function Index() {

  return (
    <>

      <Navbar />

      <section className="sec_box">
        <div className='mainbox'>
          <div className="main_heading">
            <h1>The Best Online Resume Builder</h1>
          </div>

          <div className="sec_text">
            <p>Easily create the perfect resume for any job using our best-in-class resume builder platform.</p>
          </div>

          <div className="sec_btn">
            <NavLink to="/inputfile">
              <button>Create My Resume</button>
            </NavLink>

          </div>
        </div>

        <div className="sec_img">
          <img src="resume_image.jpg"></img>
        </div>
      </section>
    </>
  )

}

export default Index;