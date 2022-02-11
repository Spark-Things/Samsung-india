import { useState } from 'react';
import '../Components/Mobile.css';
import cup from '../Images/cup.jpg';
function Computing() {
  function show4() {
    document.getElementById("compu").style.display ="block";
  }
  function hide4() {
    document.getElementById("compu").style.display = "none";
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
  const [Cnum, setCnum] = useState(1); 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show4} onMouseOut={hide4}>
            <h2 id="heads">Computing</h2>
           <div className='mconatiner'>
              <li className="lists" onMouseOver={() =>{setCnum(1)}} style={Cnum==1 ? active : null}>Featured</li>
              <li className="lists" onMouseOver={() =>{setCnum(2)}} style={Cnum==2 ? active : null}>Computer Moniters</li>
              <li className="lists" onMouseOver={() =>{setCnum(3)}} style={Cnum==3 ? active : null}>Memory & Storage</li>
              <li className="lists" onMouseOver={() =>{setCnum(4)}} style={Cnum==4 ? active : null}>e-catalog</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'>
                  <div style={Cnum==1 ? style2 : style1}>
                     <li className="lists">Smart Moniters</li>
                     <li className="lists">Ultra Wide Curved Moniter</li>
                     <li className="lists">Gaming Moniter</li>
                     <li className="lists">Curved Moniter</li>
                    </div>
                    <div style={Cnum==2 ? style2 : style1}>
                    <li className="lists">Overview</li>
                     <li className="lists">Smart Moniters</li>
                     <li className="lists">Gaming Moniter</li>
                     <li className="lists">High Resulation Moniter</li>
                     <li className="lists">Curved Moniter</li>
                     <li className="lists">Flat Moniter</li>
                     <li className="lists">Business Moniter</li>
                     <li className="lists">See All Computer Moniters</li>
                    </div>
                    <div style={Cnum==3 ? style2 : style1}>
                    <li className="lists">Overview</li>
                     <li className="lists">NVMe SSD</li>
                     <li className="lists">SATA SSD</li>
                     <li className="lists">Portable SSD</li>
                     <li className="lists">Memory Cards</li>
                     <li className="lists">USB Flash Drive</li>
                     <li className="lists">See All Memory & Storage</li>
                    </div>
                    <div style={Cnum==4 ? style2 : style1}>
                    <li className="lists">Moniters</li>
                    </div>
                  </div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide4}>close</button>
                   </div>
                   <div id='vertical'></div> 
                    <div className='rncontent'>
                         <img className='imgs' src={cup}/>
                       <p className='pname'>The Jolliest Cristmas Sale Is Here</p>
                       <p className='pname2'>Buy now</p>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}
export default Computing;