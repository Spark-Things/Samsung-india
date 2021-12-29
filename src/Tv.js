import { useState } from 'react';
import './Mobile.css';
import tvs from './tvs.jpg';
function Tv() {
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
  function show2() {
    document.getElementById("tv").style.display = "block";
   }
  function hide2() {
    document.getElementById("tv").style.display = "none";
  }
  const [Tnum, setTnum] = useState(1); 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show2} onMouseOut={hide2}>
            <h2 id="heads">TV & AV</h2>
           <div className='mconatiner'>
              <li className="lists" onMouseOver={() =>{setTnum(1)}} style={Tnum==1 ? active : null}>Featured</li>
              <li className="lists" onMouseOver={() =>{setTnum(2)}} style={Tnum==2 ? active : null}>TVs</li>
              <li className="lists" onMouseOver={() =>{setTnum(3)}} style={Tnum==3 ? active : null}>Lifestyle TVs</li>
              <li className="lists" onMouseOver={() =>{setTnum(4)}} style={Tnum==4 ? active : null}>TV by Size</li>
              <li className="lists" onMouseOver={() =>{setTnum(5)}} style={Tnum==5 ? active : null}>Sound Devices</li>
              <li className="lists" onMouseOver={() =>{setTnum(6)}} style={Tnum==6 ? active : null}>Care Packs</li>
              <li className="lists" onMouseOver={() =>{setTnum(7)}} style={Tnum==7 ? active : null}>e-catalog</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'>
                  <div style={Tnum==1 ? style2 : style1}>
                    <li className="lists">Neo QLED 8K</li>
                    <li className="lists">Neo QLED 4K</li>
                    <li className="lists">QLED 4K</li>
                    <li className="lists">The Frame</li>
                    <li className="lists">The Serif</li>
                    <li className="lists">The Premiere</li>
                    <li className="lists">4K UHD TV</li>
                    <li className="lists">Smart TV</li>
                    <li className="lists">All About TV</li>
                    <li className="lists">The Wall</li>
                    <li className="lists">Q-series Soundbar</li>        
                    </div>
                    <div style={Tnum==2 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">QLED </li>
                    <li className="lists">Crystal UHD</li>
                    <li className="lists">8K TVs</li>
                    <li className="lists">4k TVs</li>
                    <li className="lists">Full HD/HD TVs</li>
                    <li className="lists">Smart TVs</li>
                    <li className="lists"> See All TV</li>      
                    </div>
                    <div style={Tnum==3 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">The Frame</li>
                    <li className="lists">The Serif</li>
                    <li className="lists">The Premiere</li>
                    <li className="lists">The Sero</li>
                    <li className="lists">TV Accessories</li>
                    <li className="lists"> See All  lifestyle TVs</li>      
                    </div>
                    <div style={Tnum==4 ? style2 : style1}>
                    <li className="lists">55-And-Above</li>
                    <li className="lists">48-54</li>
                    <li className="lists">40-47</li>
                    <li className="lists">32-39</li>
                    <li className="lists"> See All</li>      
                    </div>
                    <div style={Tnum==5 ? style2 : style1}>
                    <li className="lists">Overview</li>
                    <li className="lists">Sound Bar</li>
                    <li className="lists">Sound Tower</li>
                    <li className="lists">Home Entertainment System</li>
                    <li className="lists"> See All Sound Device</li>      
                    </div>
                    <div style={Tnum==7 ? style2 : style1}>
                    <li className="lists">Televisions | Sound Devices</li>   
                    </div>
                  </div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide2}>close</button>
                   </div>
                   <div id='vertical'></div> 
                    <div className='rncontent'>
                         <img className='imgs' src={tvs}/>
                       <p className='pname'>New Crystal 4K | 4K Pro</p>
                       <p className='pname2'>Buy now</p>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}
export default Tv;