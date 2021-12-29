import { useState } from 'react';
import f3 from './f3.jpg';
import './Mobile.css';
function Mobile() {
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
  function hide() {
    document.getElementById("mobile").style.display = "none";
  } 
  function show() {
    document.getElementById("mobile").style.display = "block";
   }
   const [Mnum, setMnum] = useState(1); 
  return(
    <>
       <div id="Mobiletab" onMouseOver={show} onMouseOut={hide}>
          <h2 id="heads">Mobile</h2>
         <div className='mconatiner'>
            <li className="lists" onMouseOver={() =>{setMnum(1)}} style={Mnum==1 ? active : null}>Featured</li>
            <li className="lists" onMouseOver={() =>{setMnum(2)}} style={Mnum==2 ? active : null} >Smart Phones</li>
            <li className="lists" onMouseOver={() =>{setMnum(3)}} style={Mnum==3 ? active : null}>Tablets</li>
            <li className="lists" onMouseOver={() =>{setMnum(4)}} style={Mnum==4 ? active : null}>Watches</li>
            <li className="lists" onMouseOver={() =>{setMnum(5)}} style={Mnum==5 ? active : null}>Galaxy Buds</li>
            <li className="lists" onMouseOver={() =>{setMnum(6)}} style={Mnum==6 ? active : null}>Accessories</li>
            <li className="lists" onMouseOver={() =>{setMnum(7)}} style={Mnum==7 ? active : null}>One UI</li>
            <li className="lists" onMouseOver={() =>{setMnum(8)}} style={Mnum==8 ? active : null}>Why Galaxy</li>
            <li className="lists" onMouseOver={() =>{setMnum(9)}} style={Mnum==9 ? active : null}>Samsung Care+</li>
            <li className="lists" onMouseOver={() =>{setMnum(10)}} style={Mnum==10 ? active : null}>e-catalog</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'>
                <div style={Mnum==1 ? style2 : style1}>
                    <li className="lists">Galaxy Z Fold3 5G</li>
                    <li className="lists">Galaxy Z Flip3 5G</li>
                    <li className="lists">Galaxy S21 | S21+ 5G</li>
                    <li className="lists">Galaxy S21 Ultra 5G</li>
                    <li className="lists">Galaxy Tab S7 FE (Wi-Fi)</li>
                    <li className="lists">Galaxy Watch4</li>
                    <li className="lists">Galaxy Watch4 Classic</li>
                    <li className="lists">Galaxy Buds2</li>     
                      </div>
                      <div style={Mnum==2 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Galaxy Z</li>
                    <li className="lists">Galaxy S</li>
                    <li className="lists">Galaxy Note</li>
                    <li className="lists">Galaxy A</li>
                    <li className="lists">Galaxy M</li>
                    <li className="lists">Galaxy F</li>
                    <li className="lists">See All Phones</li>
                    <li className="lists">Compare</li>     
                      </div>
                      <div style={Mnum==3 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Galaxy Tab S</li>
                    <li className="lists">Galaxy Tab A</li>
                    <li className="lists">Accessories</li>
                    <li className="lists">See All Tablets</li>
                    <li className="lists">Compare</li>     
                      </div>  
                      <div style={Mnum==4 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Galaxy Watch</li>
                    <li className="lists">Accessories</li>
                    <li className="lists">See All Watches</li>
                    <li className="lists">Compare</li>     
                      </div> 
                      <div style={Mnum==5 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Galaxy Buds</li>
                    <li className="lists">AKG Headphones</li>
                    <li className="lists">See All Audio Sound Devices</li>
                    <li className="lists">Compare</li>     
                      </div> 
                      <div style={Mnum==6 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Smartphone Accessories</li>
                    <li className="lists">Tablet Accessories</li>
                    <li className="lists">Watch Accessories</li>     
                    <li className="lists">See All Accessories</li>
                      </div>
                      <div style={Mnum==7 ? style2 : style1}>
                    <li className="lists">One UI Overview</li>
                    <li className="lists">Apps & Service Overview</li>
                    <li className="lists">Galaxy Store</li>
                    <li className="lists">Bixby</li>     
                    <li className="lists">Samsung Pay</li>
                    <li className="lists">Samsung Health Moniter</li>
                    <li className="lists">Samsung Dex</li>
                    <li className="lists">Samsung Members</li>
                    <li className="lists">Smart Switch</li>
                    <li className="lists">My Galaxy</li>
                      </div>  
                      <div style={Mnum==10 ? style2 : style1}>
                      <li className="lists">Galaxy Z | Galaxy S | Galaxy Note</li>
                      <li className="lists">Galaxy A</li>
                      <li className="lists">Galaxy M</li>
                    <li className="lists">Galaxy F</li>
                     <li className="lists">Tablets | Wearables</li>
                      </div>      
                </div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide}>close</button>
                 </div>
                 <div id='vertical'></div> 
                  <div className='rncontent'>
                       <img className='imgs' src={f3}/>
                     <p className='pname'>Galaxy Fold 3 | Flip 3</p>
                     <p className='pname2'>Buy now</p>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}
export default Mobile;