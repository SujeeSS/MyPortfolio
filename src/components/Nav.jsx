import React from "react";
import home from './Home';
import '../style/Nav.css';
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Nav() {

  
  return (
    <div className=" ">

      <div className="  row  fixed-top mx-auto"  style={{ backgroundColor: "rgb(12, 24, 38, 255)" }}>
        <div className=" col-8 col-sm-10 col-lg-6   h1 display-5 text-center" id="NSR">Portfolio</div>
        <div className="col-lg-6 row text-center h5 mt-3 d-none d-lg-block " id="NST">
          <i className="col">Home</i>
          <i className="col"><Link to={'/About'} >About</Link></i>
          <i className="col"><Link to={'/Skills'} >Skills</Link></i>
          <i className="col"><Link to={'/Porjects'} >Porjects</Link></i>
          <i className="col"><Link to={'/Contact'} >Contact</Link></i>
        </div>
      </div>
      <div className=" fixed-bottom mb-3 " id="upbtn" >
        <a href={home} className="btn btn-outline-light float-end display-1 me-3 bnt">^</a>
      </div>

<Routes>
    <Route path='/About' component={ About}/>
    <Route path="/Skills" Component={Skills}/>
    <Route path="/Projects" Component={Projects}/>
    <Route path="/Contact" Component={Contact}/>
  </Routes>
    </div>
  )
}
