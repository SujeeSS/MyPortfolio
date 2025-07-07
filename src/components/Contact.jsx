import React from 'react';
import { useRef, useEffect, useState } from 'react';
import '../style/Contact.css';




export default function Contact() {
    
  const ref = useRef();
  const [VisibleC, setVisibleC] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleC(true);
        observer.unobserve(entry.target); // only trigger once
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
        <div  className={`container ${VisibleC ? 'animateC' : ''}`} ref={ref} >
            <div class=" mt-5" id='PSL'>
                <h1 class=" mt-2 text-center ">Contact <span style={{color:"rgba(0, 154, 254, 255)"}}>Me</span></h1>
            </div>
            <div class="row mt-5 col-12 me-5">
                <div class="col-12 col-lg-6 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae cumque omnis distinctio, libero
                        quos consectetur ipsum earum, totam, nulla aliquid! Ipsum delectus ab pariatur architecto quisquam
                        eligendi possimus omnis illum, sapiente corrupti iure, assumenda, hic unde illo quae obcaecati laborum
                        beatae. Optio nemo dolorem voluptas, pariatur id distinctio vero.</p>
                        <div className='mt-3'>

                    <i class=' bx bxl-linkedin-square display-6 me-3 rounded-3  bnt ' id='i1'></i>
                    <i class='bx bxl-github display-6 rounded-circle  bnt' id='i2'></i>
                    <i className='bx bxl-gmail display-6  ms-3 rounded-2  bnt' id='i3'></i><br />
                        </div>
                </div>
                <div class="col-12 col-lg-6  mt-sm-5 mt-lg-0" >
                    <input type="text" class="form-control" id='CSL1' placeholder=" Name"  /><br />
                    <input type="text" class="form-control" id='CSL2'  placeholder=" Email"  /><br />
                    <input type="text" class="form-control" id='CSL3'  placeholder=" Subject"  /><br />
                    <input type="text" class="form-control h-100" id='CSL4'  placeholder=" Your Message"  /><br/>
                    <div className=' d-flex ' id='CSL5'><button className='btn btn-outline-light mx-auto col-6 bnt'>Submit</button></div>
                </div>
            </div>
        <div>
          
        </div>
        </div>
        

    )
}


  

  