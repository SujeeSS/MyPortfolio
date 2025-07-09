import React from 'react'
import "../style/Main.css"
import myimg from "../resource/bedhtl.jpg"
import Typed from 'typed.js'

export default function Main() {
    // <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js "></script>

    const el = React.useRef(null);

    const typ = {
        strings: ["Frontend Developer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 90,
        backDelay: 1000,
        loop: true
    }

    React.useEffect(() => {
        const typed = new Typed(el.current, typ);


        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();

        };
    }, []);
    return (
        <div className="container">
            <div className=" container row h3 fixed-top mx-auto" id="nvb" style={{ backgroundColor: "rgb(12, 24, 38, 255)" }}>
                <div className=" col-sm-10 col-lg-4  text-center">Portfolio</div>
                <div className="col-sm-2 d-lg-none text-center"><i className='bx bx-dots-vertical-rounded'></i></div>
                <div className="col-lg-8  row text-end d-none d-lg-block text-decoration-none">
                    <i className="col">Home</i>
                    <i className="col">About</i>
                    <i className="col">Skills</i>
                    <i className="col">Porjects</i>
                    <i className="col">Contact</i>
                </div>
            </div>
            <div id="upbtn">
                <a href="#" className=" bx bx-up-arrow-alt btn btn-outline-light display-1 bnt"> </a>
            </div>
            {/* HOME */}
            <div className=" col-lg-3 d-lg-none mt-5 d-flex ">
                <img id="imgbg" className=" border rounded-circle img-fluid mx-auto" src={myimg} alt="" />
            </div>
            <div className=" mt-5 row ">
                {/* <!-- dsktpview --> */}
                <div className=" text-start col-lg-9  mt-5">
                    <h4>Hey I'm </h4>
                    <h1>Sujeendhar M</h1>
                    <h4>I'm a <span className="txt1 h3" id="txt" ref={el}></span ></h4>
                    <p>To use my web development skills to create user-friendly websites and applications while continuously
                        learning and implementing innovative solutions</p>
                    <i className=' bx bxl-linkedin-square display-6  rounded-3  bnt '></i>
                    <i className='bx bxl-github display-6 rounded-circle mx-3 bnt'></i>
                    <i className='bx bxl-gmail display-6 rounded-2  bnt'></i><br />
                    <button className=" bnt btn  btn-outline-light mt-3"> More About Me..</button>
                </div>
                <div className=" col-lg-3 d-none d-lg-block mt-5">
                    <img id="imgbg" className=" border rounded-circle img-fluid" src={myimg} alt="" />
                </div>

            </div>
            {/* <!-- no shake-error --> */}
            <div className="  container mt-5 text-center">
                <h1 className="ms-5">About <span id="grdntxt">Me</span></h1>
            </div>
            <div className="row container mt-5">
                <div className=" d-none  d-lg-block col-lg-3 ">
                    <img id="imgbg" className=" border rounded-circle  img-fluid" src={myimg} alt="" />
                </div>
                <div className="col-lg-9 justify-content-center">
                    <p className="mx-lg-5  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia sint ipsum
                        delectus
                        odio, neque voluptatibus assumenda optio eveniet repudiandae deleniti veniam ipsam ab, quae accusamus
                        facilis quibusdam ullam temporibus. Labore fugit earum nobis et cumque sint corporis doloribus libero
                        nulla, molestias quam sed dolore officiis inventore quos dicta reprehenderit! Quo voluptatem, assumenda
                        quod porro hic corrupti quis maiores laborum aliquam debitis fugiat atque? Minus, fugiat. Quas nisi
                        magnam soluta.</p>
                </div>
            </div>

            <div className=" mt-5">
                <h1 className=" mt-2 text-center ">My <span id="grdntxt">Skills</span></h1>
            </div>

            <div className="row  mx-3">
                <div className=" col-sm-12 col-lg-6 mt-5">
                    <h3> Technical Skills</h3>
                    <div className="mt-3">
                        <i className="bx bxl-html5 h3 "></i>
                        <h5>HTML</h5>
                        <div className="progress pup" >
                            <div className="progress-bar " id="pbclr" style={{ backgroundColor: 'blue', width: '90%' }}>90%</div>
                        </div>
                        <i className='bx bxl-css3 mt-3 h3' ></i>
                        <h5>CSS</h5>
                        <div className="progress pup ">
                            <div className="progress-bar " id="pbclr" style={{ backgroundColor: 'blue', width: '80%' }}>80%</div>
                        </div>
                        <i className='bx bxl-javascript mt-3 text-warning h3'></i>
                        <h5 className=" ">JavaScript</h5>
                        <div className="progress pup" >
                            <div className="progress-bar " id="pbclr" style={{ backgroundColor: 'blue', width: '80%' }} >80%</div>
                        </div>
                        <i className='bx bxl-react mt-3 text-primary h4'></i>
                        <h5 className=" ">ReactJS</h5>
                        <div className="progress pup " >
                            <div className="progress-bar " id="pbclr" style={{ backgroundColor: 'blue', width: '80%' }}>70%</div>
                        </div>
                        <i className='bx bxl-java mt-3  h3 javaclr'></i>
                        <h5 className=" ">JAVA</h5>
                        <div className="progress pup" >
                            <div className="progress-bar " id="pbclr" style={{ backgroundColor: 'blue', width: '80%' }}>50%</div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 mt-5 ">
                    <h3> Professional Skills</h3>
                    <div className="mt-3 mx-5 row mt-5 ">
                        <div className="col-sm-12  col-md-6 mt-5  ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto" id="bgclr" >
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center" id="bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Communication</h5>
                        </div>

                        <div className="col-sm-12  col-md-6 mt-5  ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto" id="bgclr">
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center" id="bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Problem-Solving</h5>
                        </div>

                        <div className="col-sm-12  col-md-6 mt-5">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto" id="bgclr">
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center" id="bbgclr">
                                    95%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">TeamWork</h5>
                        </div>



                        <div className="col-sm-12  col-md-6 mt-5 ">
                            <div className="d-flex  rounded-circle bg-dark  align-items-center  mx-auto" id="bgclr">
                                <p className=" rounded-circle mx-auto mt-3 text-center align-content-center" id="bbgclr">
                                    80%
                                </p>
                            </div>
                            <h5 className="mt-2 text-center">Adaptability</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-5">
                <h1 className=" mt-2 text-center ">My <span id="grdntxt">Projects</span></h1>
            </div>

            <div className=" row">
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="card" >
                        <img src={myimg} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-dark">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                        </div>
                        <a href="abcd" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4  mt-5">
                    <div className="card" >
                        <img src={myimg} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-dark">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                        </div>
                        <a href="abcd" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div className="card" >
                        <img src={myimg} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-dark">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                        </div>
                        <a href="abcd" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div className=" mt-5">
                <h1 className=" mt-2 text-center ">Contact <span id="grdntxt">Me</span></h1>
            </div>
            <div className="row mt-5">
                <div className="col-sm-12 col-lg-6 mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae cumque omnis distinctio, libero
                        quos consectetur ipsum earum, totam, nulla aliquid! Ipsum delectus ab pariatur architecto quisquam
                        eligendi possimus omnis illum, sapiente corrupti iure, assumenda, hic unde illo quae obcaecati laborum
                        beatae. Optio nemo dolorem voluptas, pariatur id distinctio vero.</p>
                    <i className=' bx bxl-linkedin-square display-6 me-3 rounded-3  bnt '></i>
                    <i className='bx bxl-github display-6 rounded-circle  bnt'></i><br />
                </div>
                <div className=" col-sm-12 col-lg-6 mt-5">
                    <input type="text" className="form-control" placeholder=" Name" /><br />
                    <input type="text" className="form-control" placeholder=" Email" /><br />
                    <input type="text" className="form-control" placeholder=" Subject" /><br />
                    <input type="text" className="form-control h-100 " placeholder=" Your Message" /><br />
                </div>
            </div>
        </div>
    )
}
