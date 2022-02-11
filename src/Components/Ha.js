import { useState } from 'react';
import bespoke from '../Images/Bespoke.jpg'
import '../Components/Mobile.css';
function Ha() {
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
  function show3() {
    document.getElementById("ha").style.display ="block";
  }
  function hide3() {
    document.getElementById("ha").style.display = "none";
  } 
  const [num, setnum] = useState(1); 
  return(
    <>
       <div id="Mobiletab" onMouseOver={show3} onMouseOut={hide3}>
          <h2 id="heads">Home Appliance</h2>
         <div className='mconatiner'>
            <li className="lists" onMouseOver={() =>{setnum(1)}} style={num==1 ? active : null}>Featured</li>
            <li className="lists" onMouseOver={() =>{setnum(2)}} style={num==2 ? active : null}>BESPOKE</li>
            <li className="lists" onMouseOver={() =>{setnum(3)}} style={num==3 ? active : null}>Refrigerators</li>
            <li className="lists" onMouseOver={() =>{setnum(4)}} style={num==4 ? active : null}>Washing Machine & Dryers</li>
            <li className="lists" onMouseOver={() =>{setnum(5)}} style={num==5 ? active : null}>AirDresser</li>
            <li className="lists" onMouseOver={() =>{setnum(6)}} style={num==6 ? active : null}>Cooking Appliance</li>
            <li className="lists" onMouseOver={() =>{setnum(7)}} style={num==7 ? active : null}>Dishwasers</li>
            <li className="lists" onMouseOver={() =>{setnum(8)}} style={num==8 ? active : null}>Air Conditioners</li>
            <li className="lists" onMouseOver={() =>{setnum(9)}} style={num==9 ? active : null}>Air Purifier</li>
            <li className="lists" onMouseOver={() =>{setnum(10)}} style={num==10 ? active : null}>Care Packs</li>
            <li className="lists" onMouseOver={() =>{setnum(11)}} style={num==11 ? active : null}>e-catalog</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'>
                    <div style={num==1 ? style2 : style1}>
                    <li className="lists">BESPOKE Refrigerators</li>
                    <li className="lists">Ecobubble Washer & Dryer</li>
                    <li className="lists">IntensiveWash™ Dishwasher</li>
                    <li className="lists">AirDresser</li>
                    <li className="lists">Convertible 5 in 1 AC</li>
                    <li className="lists">WindFree AC</li>
                    <li className="lists">Stay home, stay happy</li>
                    <li className="lists">Curd Maestro™ Refrigerators</li>
                    <li className="lists">Digi-Touch Cool™ 5in1 Refrigerators</li>
                    <li className="lists">Curd Maestro™ Family Hub™ Refrigerator</li>
                    <li className="lists">Eco Fabric Care Washing Machines</li>        
                    </div>
                    <div style={num==2 ? style2 : style1}>
                     <li className="lists">Overview</li>
                     <li className="lists">BESPOKE Refrigerators</li>
                    </div>
                    <div style={num==3 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">BESPOKE Refrigerators</li>
                    <li className="lists">French Door</li>
                    <li className="lists">Side by Side</li>
                    <li className="lists">Double Door</li>
                    <li className="lists">Single Door</li>
                    <li className="lists">Buying Guides</li>
                    <li className="lists">See All Refrigerators</li>     
                      </div>
                      <div style={num==4 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Washer-Dryer</li>
                    <li className="lists">Dryers</li>
                    <li className="lists">Front Load</li>
                    <li className="lists">Top Load</li>
                    <li className="lists">Semi Automatic</li>
                    <li className="lists">Buying Guides</li>
                    <li className="lists">See All Washing Machines & Dryers</li>     
                      </div>
                      <div style={num==6 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Convection Microwave Ovens</li>
                    <li className="lists">Grill Microwave Ovens</li>
                    <li className="lists">Solo Microwave Ovens</li>
                    <li className="lists">Buying Guides</li>
                    <li className="lists">See All Cooking Appliances</li> 
                      </div> 
                      <div style={num==7 ? style2 : style1}>
                     <li className="lists">Overview</li>
                     <li className="lists">Freestanding Dishwashers</li>
                     <li className="lists">See All Dishwashers</li>
                    </div> 
                    <div style={num==8 ? style2 : style1}>
                     <li className="lists">Overview</li>
                     <li className="lists">Split AC</li>
                     <li className="lists">See All Air Conditioners</li>
                    </div> 
                    <div style={num==10 ? style2 : style1}>
                     <li className="lists">Refrigerator Care Packs</li>
                     <li className="lists">Cooking Appliance Care Packs</li>
                     <li className="lists">Washing Machine Care Packs</li>
                     <li className="lists">Air Conditioner Care Packs</li>
                    </div>
                    <div style={num==11 ? style2 : style1}>
                     <li className="lists">Refrigerators</li>
                     <li className="lists">Washing Machines</li>
                     <li className="lists">AirDresser</li>
                     <li className="lists">Dishwashers</li>
                     <li className="lists">Microwave Ovens</li>
                     <li className="lists">Air Conditioners | Air Purifiers</li>
                    </div>
                </div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide3}>close</button>
                 </div>
                 <div id='vertical'></div> 
                  <div className='rncontent'>
                       <img className='imgs' src={bespoke}/>
                     <p className='pname'>BESPOKE Refrigerators</p>
                     <p className='pname2'>Buy now</p>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}
export default Ha;