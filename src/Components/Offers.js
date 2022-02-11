import { useState } from 'react';
import offer from '../Images/offer.jpg'
import '../Components/Mobile.css';
function Offers() {
  function show6() {
    document.getElementById("Offers").style.display ="block";
  }
  function hide6() {
    document.getElementById("Offers").style.display = "none";
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
  const [Onum, setOnum] = useState(1); 
  return(
    <>
       <div id="Mobiletab" onMouseOver={show6} onMouseOut={hide6}>
          <h2 id="heads">Offers</h2>
         <div className='mconatiner'>
            <li className="lists" onMouseOver={() =>{setOnum(1)}} style={Onum==1 ? active : null}>View All Offers</li>
            <li className="lists" onMouseOver={() =>{setOnum(2)}} style={Onum==2 ? active : null}>Smart Ways To Buy</li>
            <li className="lists" onMouseOver={() =>{setOnum(3)}} style={Onum==3 ? active : null}>Samsung Live</li>
            <li className="lists" onMouseOver={() =>{setOnum(4)}} style={Onum==4 ? active : null}>Shop Mobile</li>
            <li className="lists" onMouseOver={() =>{setOnum(5)}} style={Onum==5 ? active : null}>Shop Tablets</li>
            <li className="lists" onMouseOver={() =>{setOnum(6)}} style={Onum==6 ? active : null}>Shop Wareables</li>
            <li className="lists" onMouseOver={() =>{setOnum(7)}} style={Onum==7 ? active : null}>Shop Accessories</li>
            <li className="lists" onMouseOver={() =>{setOnum(8)}} style={Onum==8 ? active : null}>Shop Television</li>
            <li className="lists" onMouseOver={() =>{setOnum(9)}} style={Onum==9 ? active : null}>Shop Home Appliance</li>
            <li className="lists" onMouseOver={() =>{setOnum(10)}} style={Onum==10 ? active : null}>Shop Moniters</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'>
                  <div style={Onum==1 ? style2 : style1}>
                  <li className="lists">Holiday gifts</li>
                  </div>
                  <div style={Onum==2 ? style2 : style1}>
                  <li className="lists">Samsung Exchange Program</li>
                  <li className="lists">Samsung Finance+</li>
                  <li className="lists">Samsung Student Advantage</li>
                  <li className="lists">Samsung Referral Advantage</li>
                  <li className="lists">Samsung Combo Offers</li>
                  <li className="lists">Galaxy Assured Program</li>
                  <li className="lists">Corporate Employee Program</li>
                  <li className="lists">Samsung Delight Delivery</li>
                  <li className="lists">Samsung Club Loyalty Program</li>
                  <li className="lists">Galaxy Forever Program</li>
                  <li className="lists">Defence Purchase program</li>
                  </div>
                  <div style={Onum==4 ? style2 : style1}>
                  <li className="lists">View All Mobiles</li>
                  <li className="lists">Mobile By Price</li>
                  <li className="lists">Mobile By Bettery Capacity</li>
                  <li className="lists">Mobile By Memory Storage</li>
                  <li className="lists">Mobile By Mobile NetWorks</li>
                  <li className="lists">Mobile By Camera</li>
                  <li className="lists">Mobile By RAM Size</li>
                  <li className="lists">Mobile By Display</li>
                  <li className="lists">Mobile By Screen Size</li>
                  <li className="lists">Gaming Phones</li>
                  </div>
                  <div style={Onum==8 ? style2 : style1}>
                  <li className="lists">Overview</li>
                  <li className="lists">Television by Size</li>
                  <li className="lists">Television by Features</li>
                  <li className="lists">Television by Price</li>
                  </div>
                  <div style={Onum==9 ? style2 : style1}>
                  <li className="lists">Shop Refrigerator By Price</li>
                  <li className="lists">Shop Refrigerator By Capacity</li>
                  <li className="lists">Shop Washing Machine By Price</li>
                  <li className="lists">Shop Washing Machine By Capacity</li>
                  <li className="lists">Shop Washing Machine By Type</li>
                  <li className="lists">Shop Microwave Oven</li>
                  <li className="lists">Shop Air Conditioner</li>
                  <li className="lists">Shop Dishwashers</li>
                  </div>
                </div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide6}>close</button>
                 </div>
                 <div id='vertical'></div> 
                  <div className='rncontent'>
                       <img className='imgs' src={offer}/>
                     <p className='pname'>Gifts for everyone On your List</p>
                     <p className='pname2'>Buy now</p>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}
export default Offers;