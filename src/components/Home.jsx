import React from 'react';
import Typed from 'typed.js';
import '../style/Home.css';
import myimg from '../resource/myimg1.jpg';



export default function Home() {

const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current,  {
        strings: ["Web Developer","Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 90,
        backDelay: 1000,
        loop: true
    });


        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();

        };
    }, []);
    


    return (
        <div className='container mt-3 mt-lg-5 ' id='HSW'>
            <div className=" col-lg-3 d-lg-none mt-5 d-flex " >
                <img  className=" mt-5 border rounded-circle img-fluid mx-auto imgbg" src={myimg} alt="" style={{ boxShadow: "0 0 5px white, 0 0 25px white"}}/>
            </div>
            <div className=" row " >
                <div className=" text-start col-lg-9  mt-5">
                    <h4>Hey I'm </h4>
                    <h1>Sujeendhar M</h1>
                    <h4>I'm a <span className="txt1 h3" id="txt" ref={el} ></span ></h4>
                    <p className='' >To use my web development skills to create user-friendly websites and applications while continuously
                        learning and implementing innovative solutions</p>
                    <i className=' bx bxl-linkedin-square display-6  rounded-3  bnt '></i>
                   <i class='bx bxl-github display-6 rounded-circle mx-3 bnt'style={{width:'40px',height:'40px'}} ></i>
                    <i className='bx bxl-gmail display-6 rounded-2  bnt'></i><br />
                    <button className=" bnt btn  btn-outline-light mt-3">More About Me...</button>
                </div>
                <div className=" col-lg-3 d-none d-lg-block mt-5">
                    <img  className=" border rounded-circle img-fluid imgbg" src={myimg} alt=""/>
                </div>

            </div>
            </div>
            )
}
