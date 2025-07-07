import React, { useEffect, useRef, useState } from 'react';
import '../style/Projects.css';
import PAug from '../resource/augistin.png';
import PLib from '../resource/libp.png';
import PBall from '../resource/ballgame.png';



export default function Projects() {
 const refp =useRef();
 const [VisibleP,setVisibleP] = useState(false);
 useEffect(()=>{
  const observer =new IntersectionObserver(([entry])=>{

    if(entry.isIntersecting){
      setVisibleP(true);
      observer.unobserve(entry.target);
    }
  })
  observer.observe(refp.current);
  return ()=>observer.disconnect;
 },[])




  return (
    <div className={`container ${ VisibleP ? 'animateP': ''} Projects` }>
      <div class=" mt-5" id='PSL'>
        <h1 class=" mt-2 text-center ">My <span style={{ color: 'rgb(0,154, 254)' }}>Projects</span></h1>
      </div >
      <div className='row col-12 mt-3' ref={refp}>
{/* Hotel project */}
        <div className=" col-12 col-lg-4 card overflow-hidden mt-3" id='C1'>
          <div className="img" >
            <img src={PAug} className="card-img " alt="..." />
          </div>
          <h5 className="title " style={{ color: 'rgb(0,154, 254)' }}>Hotel Augustine</h5>
          <div className="card-img-overlay ">
            <h5 className="card-title " style={{ color: 'rgb(0,154, 254)' }}>Hotel Augustine</h5>
            <p className="card-text  text-light">A stylish and responsive hotel landing page for "L'Hotel Augustine," to highlighting services.
              Its clean, symmetrical layout promotes hotel features and can be expanded with booking options or exclusive offers.
            </p>
            <button className='btn btn-outline-light bnt' onClick={() =>{window.open("https://chatgpt.com/")}}>Learn more</button>
          </div>
        </div>

        {/* LMS project */}
        <div className=" col-12 col-lg-4 card mt-3" id='C2'>
          <img src={PLib} className="card-img " alt="..." />
          <h5 className="title " style={{ color: 'rgb(0,154, 254)' }}>My BookShelf</h5>
          <div className="card-img-overlay ">
            <h5 className="card-title " style={{ color: 'rgb(0,154, 254)' }}>My BookShelf</h5>
            <p className="card-text  text-light">It built with React, HTML, CSS, Bootstrap, and JavaScript for user login and book management.
              It uses MockAPI to manage personal bookshelves, allowing users to add, view, and delete their books.
            </p>
            <button className='btn btn-outline-light bnt' onClick={() =>{window.open("https://chatgpt.com/")}}>Learn more</button>
          </div>
        </div>

        {/* Ball Project */}
        <div className=" col-12 col-lg-4 card mt-3" id='C3'>
          <img src={PBall} className="card-img " alt="..." />
          <h5 className="title " style={{ color: 'rgb(0,154, 254)' }}>Brick Breaker game</h5>
          <div className="card-img-overlay ">
            <h5 className="card-title " style={{ color: 'rgb(0,154, 254)' }}>Brick Breaker game</h5>
            <p className="card-text  text-light">A simple Java Swing Brick Breaker game where players control a paddle with keyboard keys to break bricks and score points.
              Built using JFrame and timers, it features a single stage with custom-rendered bricks, paddle, and ball animations.
            </p>
            <button className='btn btn-outline-light bnt' onClick={() =>{window.open("https://chatgpt.com/")}}>Learn more</button>
          </div>
        </div>


      </div>
    </div>
  )
}
