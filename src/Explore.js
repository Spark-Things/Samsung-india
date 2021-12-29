import { useState } from 'react';
import './Mobile.css';
import explore from './explore.jpg';
function Explore() {
  function show7() {
    document.getElementById("Explore").style.display ="block";
  }
  function hide7() {
    document.getElementById("Explore").style.display = "none";
  } 
  const style1={
    display:"none"
  }
  const style2={
    display:"block"
  }
  const active={
    color:"black",
    fontWeight: 550,
    textDecoration: "underline"
  }
  const [Enum, setEnum] = useState(1); 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show7} onMouseOut={hide7}>
            <h2 id="heads">Explore</h2>
           <div className='mconatiner'>
              <li className="lists"  onMouseOver={() =>{setEnum(1)}} style={Enum==1 ? active : null}>Stories</li>
              <li className="lists" onMouseOver={() =>{setEnum(2)}} style={Enum==2 ? active : null}>Brand</li>
              <li className="lists" onMouseOver={() =>{setEnum(3)}} style={Enum==3 ? active : null}>How to</li>
              <li className="lists" onMouseOver={() =>{setEnum(4)}} style={Enum==4 ? active : null}>Experiances</li>
              <li className="lists" onMouseOver={() =>{setEnum(5)}} style={Enum==5 ? active : null}>Community</li>
              <li className="lists" onMouseOver={() =>{setEnum(6)}} style={Enum==6 ? active : null}>Corporate Citizenship</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'>
                  <div style={Enum==1 ? style2 : style1}>
                  <li className="lists">Photography</li>
                  <li className="lists">Life Hacks</li>
                  <li className="lists">Wellbeing</li>
                  <li className="lists">Entertainment</li>
                  <li className="lists">Food & Home</li>
                  </div>
                  <div style={Enum==2 ? style2 : style1}>
                  <li className="lists">Brand</li>
                  <li className="lists">Galaxy Collaborations</li>
                  </div>
                  </div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide7}>close</button>
                   </div>
                   <div id='vertical'></div> 
                    <div className='rncontent'>
                         <img className='imgs' src={explore}/>
                       <p className='pname'>Reimaging a Better Planet</p>
                       <p className='pname2'>Learn More</p>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}
export default Explore;