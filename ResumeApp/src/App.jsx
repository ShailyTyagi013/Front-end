import React, {useState} from 'react';
import './App.css';
import Index from './Component/Index';
import Inputfile from './Component/Inputfile';
import Resume from './Component/Resume';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Preview from './Component/Preview';
import Experience from './Component/Experience';
import Qualification from './Component/Qualification';
import Certificate from './Component/Certificate';
// import Skills from './Component/Skills';
import Fqfile from './Component/Fqfile';
// import Signin from './Component/Signin';




function App() {

  const [curValue, setCurvalue] = useState ({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        linked: "",
        git: "",
        address: "",
        summary: "",
        companyname: "",
        jobtitle: "",
        discription: "",
        uniname: "",
        degreename: "",
        clgname: "",
        location:"",
        passyear: "",
        cgpa: "",
        course1: "",
        courselink: "",
        skills: "",
        skills2: "",
      

    });
    
  return(
  
    <>
    
    {/* <div className='mainbox'> */}
    <BrowserRouter>

        <Routes>
        
          <Route path="/" element={<Index />} />
         
          <Route path='/resume' element ={<Resume />} />
          <Route path='/fqfile' element ={<Fqfile />} />
          <Route path="/inputfile" element={<Inputfile curValue={curValue} setCurvalue={setCurvalue} />} />
          <Route path="/Preview" element={<Preview  data={curValue} />} />
          <Route  path="/experience" element={<Experience curValue={curValue} setCurvalue={setCurvalue} />} />
          <Route path="/qualification" element = {<Qualification  curValue={curValue} setCurvalue={setCurvalue} />} />
          <Route path="/certificate" element={ <Certificate curValue={curValue} setCurvalue={setCurvalue} />} />
          {/* <Route path="/skills" element ={<Skills />} />
          <Route path="/signin" element={<Signin />} /> */}
         
        </Routes>
          
    

      </BrowserRouter>
   
 
    {/* </div> */}
    
    </>
  )
  
}

export default App
