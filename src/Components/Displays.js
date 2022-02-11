import { useState } from 'react';
import '../Components/Mobile.css';
import display from '../Images/display.jpg';
function Displays() {
  function show5() {
    document.getElementById("Displays").style.display ="block";
  }
  function hide5() {
    document.getElementById("Displays").style.display = "none";
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
  const [Dnum, setDnum] = useState(1); 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show5} onMouseOut={hide5}>
            <h2 id="heads">Displays</h2>
           <div className='mconatiner'>
              <li className="lists" onMouseOver={() =>{setDnum(1)}} style={Dnum==1 ? active : null}>Featured</li>
              <li className="lists" onMouseOver={() =>{setDnum(2)}} style={Dnum==2 ? active : null}>Moniters</li>
              <li className="lists" onMouseOver={() =>{setDnum(3)}} style={Dnum==3 ? active : null}>Smart Signage</li>
              <li className="lists" onMouseOver={() =>{setDnum(4)}} style={Dnum==4 ? active : null}>LED Signage</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'>
                  <div style={Dnum==1 ? style2 : style1}>
                    <li className="lists">Business Display Solution</li>
                    </div>
                   <div style={Dnum==2 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Home</li>
                    <li className="lists">For Business</li>
                    <li className="lists">See All Moniters</li>
                    </div>
                    <div style={Dnum==3 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Digital Flipcart</li>
                    <li className="lists">QLED 8K</li>
                    <li className="lists">Crystel UHD</li>
                    <li className="lists">Outdoor & Window</li>
                    <li className="lists">See All Smart Signage</li>
                  </div>
                  <div style={Dnum==4 ? style2 : style1}>
                  <li className="lists">The Wall</li>
                  </div>
                  </div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide5}>close</button>
                   </div>
                   <div id='vertical'></div> 
                    <div className='rncontent'>
                         <img className='imgs' src={display}/>
                       <p className='pname'>Digital flipchart</p>
                       <p className='pname2'>Learn More</p>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}
export default Displays;