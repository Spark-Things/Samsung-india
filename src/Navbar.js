import './Navbar.css';
import search from './search.png';
import cart from './cart.png';
import user from './user.png';
import Mobile from './Mobile';
import Tv from './Tv';
import Ha from './Ha';
import Computing from './Computing';
import Displays from './Displays';
import Offers from './Offers';
import Explore from './Explore';
import Support from './Support';
import Businuss from './Businuss';
function Navbar(){
  const style1={
    display: "none"
}
const style2={
    display: "block"
}
  function show() {
    document.getElementById("mobile").style.display = "block";
   }
  function hide() {
    document.getElementById("mobile").style.display = "none";
  }
  function show2() {
    document.getElementById("tv").style.display = "block";
   }
  function hide2() {
    document.getElementById("tv").style.display = "none";
  }
  function show3() {
    document.getElementById("ha").style.display ="block";
  }
  function hide3() {
    document.getElementById("ha").style.display = "none";
  } 
  function show4() {
    document.getElementById("compu").style.display ="block";
  }
  function hide4() {
    document.getElementById("compu").style.display = "none";
  }
  function show5() {
    document.getElementById("Displays").style.display ="block";
  }
  function hide5() {
    document.getElementById("Displays").style.display = "none";
  }
  function show6() {
    document.getElementById("Offers").style.display ="block";
  }
  function hide6() {
    document.getElementById("Offers").style.display = "none";
  }
  function show7() {
    document.getElementById("Explore").style.display ="block";
  }
  function hide7() {
    document.getElementById("Explore").style.display = "none";
  }
  function show8() {
    document.getElementById("Support").style.display ="block";
  }
  function hide8() {
    document.getElementById("Support").style.display = "none";
  }
  function show9() {
    document.getElementById("Businuss").style.display ="block";
  }
   function hide9() {
   document.getElementById("Businuss").style.display = "none";
  }         
  return(
   <> 
    <div id="Navbar">
      <p id="Logo">SAMSUNG</p>
      <a onMouseOver={show} onMouseOut={hide} onClick={show}>Mobile</a>
      <a onMouseOver={show2} onMouseOut={hide2} onClick={show2}>TV & AV</a>
      <a onMouseOver={show3} onMouseOut={hide3} onClick={show3}>Home Appliance</a>
      <a onMouseOver={show4} onMouseOut={hide4} onClick={show4}>Computing</a>
      <a onMouseOver={show5} onMouseOut={hide5} onClick={show5}>Displays</a>
      <a onMouseOver={show6} onMouseOut={hide6} onClick={show6}>Offers</a>
     <div id="rightnav">
        <a onMouseOver={show7} onMouseOut={hide7} onClick={show7}>Explore</a>
        <a onMouseOver={show8} onMouseOut={hide8} onClick={show8}>Support</a>
        <a onMouseOver={show9} onMouseOut={hide9} onClick={show9}>For Businuss</a>
        <div>
         <button className="icon"><img src={search} className="navicon"/></button>
         <button className="icon"><img src={cart} className="navicon"/></button> 
         <button className="icon"><img src={user} className="navicon"/></button>    
        </div>   
    </div> 
    </div>
     <div id='mobile' style={style1} ><Mobile/></div>
     <div id='tv' style={style1} ><Tv/></div>
     <div id='ha' style={style1} ><Ha/></div>
     <div id='compu' style={style1} ><Computing/></div>
     <div id='Displays' style={style1} ><Displays/></div>
     <div id='Offers' style={style1} ><Offers/></div>
     <div id='Explore' style={style1} ><Explore/></div>
     <div id='Support' style={style1} ><Support/></div>
     <div id='Businuss' style={style1} ><Businuss/></div>
   </>  
  )
}
export default Navbar;