import { NavLink } from 'react-router-dom';
import styles from './Preview.module.css';
import Inputfile_nav from './Inputfile_nav';
import html2cancav from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';





function Preview({ data }) {
    // const pdfRef = useRef();

    const componentPDF = useRef();

    const downloadPDF = useReactToPrint( {
      content: () =>componentPDF.current,
      documentTitle: "Userdata",
      onAfterPrint: () => alert("data saved")
        
    
      

        // const divContent = document.getElementById('contentToDownload').innerHTML;
     

       
        // const blob = new Blob([divContent], { type: 'text/html' });
        // const url = URL.createObjectURL(blob);
        // const a = document.createElement('a');
        
        // a.href = url;
        // a.download = 'div_content.html';
        // document.body.appendChild(a);
        // a.click();
        // document.body.removeChild(a);
        // URL.revokeObjectURL(url);

       

    });

    return (
        <>
            <Inputfile_nav />
            <div className={styles.mainbox}>
                <div className={styles.mainbox2} id="contentToDownload" ref={componentPDF} style={{ width: '800px' }}  >
                    <div className={styles.intro}>
                        <h1>
                            {data.fname} {data.lname}
                        </h1>
                        <p>{data.address} {`|${data.phone}`} {`|${data.email}`}</p>
                        <NavLink to={data.linked}>
                            <p>{data.linked}</p>
                        </NavLink>
                        <NavLink to={data.git} >
                            <p>{data.git}</p>
                        </NavLink>
                    </div>
                    <hr />
                    <div className={styles.intro2}>
                        <h5>Summary</h5>
                        <p>{data.summary}</p>
                    </div>
                    <hr />


                    {/* EXPERIENCE SECTION */}


                    <div className={styles.secbox}>
                        <h2> PERSONAL EXPERIENCES OR PROJECTS</h2>
                        <div className={styles.disbox}>
                            <h3>{data.companyname}</h3>
                            <h3 id={styles.job}>{data.jobtitle}</h3>
                            <p>{data.discription}</p>
                        </div>
                    </div>
                    <hr />

                    {/* OUALIFICATION SECTION */}


                    <div className={styles.edubox}>
                        <h2>EDUCATION</h2>
                        <div className={styles.edubox2}>
                            <div className={styles.databox}>
                                <h4>{data.uniname}</h4>
                                <h5>{data.degreename}</h5>
                                <h5>{data.clgname}</h5>
                            </div>

                            <div className={styles.locationbox}>
                                <h5>{data.location}</h5>
                                <h5>{data.passyear}</h5>
                                <h5>{data.cgpa}</h5>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* CERTIFICATE SECTION */}

                    <div className={styles.cerbox}>
                        <h2>CERTIFICATE</h2>
                        <div className={styles.cerdata}>
                            <h3>{data.course1}</h3>
                            <NavLink to={data.courselink} >
                                <p>{data.courselink}</p>
                            </NavLink>
                        </div>

                    </div>
                    <hr />
                    {/* Skills section */}

                    <div  className={styles.skillbox}>
                        <h2>SKILLS</h2>
                        <div className={styles.techskill}>
                            <h3>TECHNICAL SKILLS</h3>
                            <p>{data.skills}</p>
                        </div>
                        <div className={styles.interskill}>
                            <h3>INTERPERSONAL SKILLS</h3>
                            <p>{data.skills2}</p>
                        </div>
                    </div>


                </div>


                <button onClick={downloadPDF} className={styles.downloadbtn} >Download</button>

            </div>



        </>
    )
}

export default Preview;