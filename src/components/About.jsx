import React from 'react';
import '../style/About.css';
import myimg2 from '../resource/myimg22.jpg';
import Abt2 from './Abt2';

export default function About() {
 
    return(
        <div className=' container'>

         <div className="  container mt-5 text-center" id='ASB'>
                        <h2 className="ms-5">About <span className='h1' style={{color:"rgba(0, 154, 254, 255)"}}>Me</span></h2>
                    </div>
                    <div className="row container mt-5" id='ASW'>
                        <div className=" d-none  d-lg-block col-lg-3 ">
                            <img className=" border rounded-circle  img-fluid imgbg "  src={myimg2} alt="" />
                        </div>
                        <div className="col-lg-9 justify-content-center ">
                            <p className="mx-lg-5  ">
                                <Abt2/>
                            <button className=" bnt btn  btn-outline-light mt-3">Download Resume </button>
                            </p>
                        </div>
                    </div>

        </div>
    )
}