import React, { useEffect, useRef, useState } from 'react';
import '../style/Skills.css';


export default function Skills() {

    const refs =useRef();
     const [VisibleS,setVisibleS] = useState(false);
     useEffect(()=>{
      const observer =new IntersectionObserver(([entry])=>{
    
        if(entry.isIntersecting){
          setVisibleS(true);
          observer.unobserve(entry.target);
        }
      })
      observer.observe(refs.current);
      return ()=>observer.disconnect;
     },[])
  return (
    <div className={`container ${VisibleS ? 'animateS':''}`  }>
      
            <div className=" mt-5">
                <h1 className=" mt-2 text-center ">My <span style={{color:"rgba(0, 154, 254, 255)"}}>Skills</span></h1>
            </div>

            <div className="row  mx-3"  ref={refs}>
                <div className=" col-sm-12 col-lg-6 mt-5 ">
                    <h3> Technical Skills</h3>
                    <div className="mt-3">
                        <i className="bx bxl-html5 h3 " style={{color:'rgb(233, 113, 33)'}}></i>
                        <h5>HTML</h5>
                        
                        <div className="progress pup" >
                            <div className="progress-bar pbclr" id='B1' style={{ '--target-width': '90%' }}>90%</div>
                        </div>
                        <i className='bx bxl-css3 mt-3 h3' style={{color:'rgb(0, 154, 254)'}}></i>
                        <h5>CSS</h5>
                        <div className="progress pup ">
                            <div className="progress-bar pbclr" id='B1' style={{ '--target-width': '90%' }}>75%</div>
                        </div>
                        <i className='bx bxl-javascript mt-3 text-warning h3'></i>
                        <h5 className=" ">JavaScript</h5>
                        <div className="progress pup" >
                            <div className="progress-bar pbclr"  id='B1' style={{ '--target-width': '80%' }} >80%</div>
                        </div>
                        <i className='bx bxl-react mt-3 text-primary h4'></i>
                        <h5 className=" ">React JS</h5>
                        <div className="progress pup " >
                            <div className="progress-bar pbclr" id='B1' style={{ '--target-width': '75%' }}>75%</div>
                        </div>
                        <i className='bx bxl-java mt-3  h3 javaclr'></i>
                        <h5 className=" ">JAVA</h5>
                        <div className="progress pup" >
                            <div className="progress-bar pbclr" id='B1' style={{ '--target-width': '90%' }}>90%</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 mt-5 " >
                    <h3> Professional Skills</h3>
                    <div className="mt-3 mx-5 row mt-5 ">
                        <div className="col-sm-12  col-md-6 mt-5  ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto bgclr" id='C1'>
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Communication</h5>
                        </div>

                        <div className="col-sm-12  col-md-6 mt-5  ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto bgclr" id='C1'>
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Problem-Solving</h5>
                        </div>

                        <div className="col-sm-12  col-md-6 mt-5">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto bgclr" id='C1'>
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center bbgclr">
                                    95%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">TeamWork</h5>
                        </div>

                        <div className="col-sm-12  col-md-6 mt-5 ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto bgclr" id='C1'>
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Adaptability</h5>
                        </div>
                    </div>
                </div>
            </div>  
    </div>
  )
}
