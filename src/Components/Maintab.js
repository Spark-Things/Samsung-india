import {useState} from 'react';
import '../Components/Maintab.css';
import Navbar from "../Components/Navbar";
import Mcon from '../Components/Mcon';
import Mpcontainer from '../Components/Mpcontainer';
import Taconatiner from '../Components/Tacontainer';
import left from '../Images/left.png';
import forward from '../Images/forward.png';
import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';
import p3 from '../Images/p3.jpg';
import p4 from '../Images/p4.jpg';
import z3 from '../Images/z3.jpg';
import t7 from '../Images/t7.jpg';
import w4 from '../Images/w4.jpg';
import A5 from '../Images/A5.jpg';
import M5 from '../Images/M5.jpg';
import tv from '../Images/tv.jpg';
import hd1 from '../Images/hd1.jpg';
import m2 from '../Images/m2.png';
import tvp from '../Images/TVP.png';
import Bsp from '../Images/Bsp.png';
import ts7 from '../Images/ts7.jpg';
import eik from '../Images/eik.jpg';
import q4k from '../Images/q4k.jpg';
import serif from '../Images/serif.jpg';
import frame from '../Images/frame.jpg';
import lp from '../Images/lp.png';
import hak from '../Images/hak.jpg';
import ha2 from '../Images/ha2.jpg';
import ha3 from '../Images/ha3.jpg';
import ha4 from '../Images/ha4.jpg';
import HAcontainer from './HAacontainer';
import Mobile from '../Components/Mobile';
function Maintab() {
    const style1={
        display: "none"
    }
    const style2={
        display: "block"
    }
    const color ={
        color: "black"
    }
    const [Show, setShow] = useState(1);
    const[Selected,setSelected] = useState(1);
    const[Selected2,setSelected2] = useState(1);
    const[Selected3,setSelected3] = useState(1);
    const[Selected4,setSelected4] = useState(1);
    
  return(
    <div id="Maintab">
        <Navbar/>
       <div id="Slider">
         <div id="slide1"  style={Show == 1 ? style2 : style1}>
         <img src={p1} className="simg"/>
         <div className="discp">
         <h1 className="sdisp">Galaxy Z </h1>
         <h1 className="sdisp">Fold3 | Flip3 5G </h1><br/>
         <p className="cashback">₹7000 cashback* on HDFC bank cards</p><br/><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
         </div>
           <button className="preb" onClick={() => {setShow(4)}}><img className="navimg" src={left}/></button>
           <button className="nextb" onClick={() =>{setShow(2)}}><img className="navimg" src={forward}/></button>
         </div>
         <div id="slide1" style={Show == 2 ? style2 : style1}>
         <img src={p2} className="simg"/>
         <div className="discp2">
         <h1 className="sdisp">Neo QLED 8K </h1><br/>
         <p className="cashback">Greatness never ends,but envoles</p><br/><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton2">Buy Now</button>
         </div>
         <button className="preb" onClick={() =>{setShow(1)}}><img className="navimg" src={left}/></button>
         <button className="nextb" onClick={() =>{setShow(3)}}><img className="navimg" src={forward}/></button>
         </div>
         <div id="slide1" style={Show == 3 ? style2 : style1}>
         <img src={p3} className="simg"/>
         <div className="discp3">
         <h1 className="sdisp">BESPOKE Refrigerators </h1><br/>
         <p className="cashback">Design for you,by you</p>
         <p className="cashback">20% Cashback#+12/0 EMI</p><br/><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
         </div>
         <button className="preb" onClick={() =>{setShow(2)}}><img className="navimg" src={left}/></button>
         <button className="nextb" onClick={() =>{setShow(4)}} ><img className="navimg" src={forward}/></button>
         </div>
         <div id="slide1" style={Show == 4 ? style2 : style1}>
         <img src={p4} className="simg"/>
         <div className="discp">
         <h1 className="sdisp">The New Galaxy Watch4 </h1><br/>
         <p className="cashback">Starts At 23999*</p>
         <p className="cashback">Get additional 3000/- cashback*</p><br/><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
         </div>
         <button className="preb" onClick={() =>{setShow(3)}} ><img className="navimg" src={left}/></button>
         <button className="nextb" onClick={() =>{setShow(1)}}><img className="navimg" src={forward}/></button>
         </div>
       </div>
       <div className="container">
           <h2 className="heading">This Month's Pick</h2>
           <div id="innavbar">
              <ul>
                  <li className='tabs'> 
               <div className="intabs" onClick={() =>{
                   setSelected(1);
               }}>
                    <a>Offers for You</a>
               <span className="opend" style={Selected==1? style2 : style1}></span>
               </div>
                 </li>
                 <li className='tabs'>
                 <div className="intabs" onClick={() =>{
                   setSelected(2);
               }}>
               <a>Mobile</a>
               <span className="opend" style={Selected==2? style2 : style1}></span>
               </div>
               </li>
               <li className='tabs'>
               <div className="intabs" onClick={() =>{
                   setSelected(3);
               }}>
               <a>TV</a>
               <span className="opend" style={Selected==3? style2 : style1}></span>
               </div>
               </li>
               <li className='tabs'>
               <div className="intabs" onClick={() =>{
                   setSelected(4);
               }}>
               <a>Appliance</a>
               <span className="opend" style={Selected==4? style2 : style1}></span>
               </div>
               </li>
               <li className='tabs'>
               <div className="intabs" onClick={() =>{
                   setSelected(5);
               }}>
               <a>Accessories & Watches</a>
               <span className="opend" style={Selected==5? style2 : style1}></span>
               </div>
               </li>
               <li className='tabs'>
               <div className="intabs" onClick={() =>{
                   setSelected(6);
               }}>
               <a>Tablets</a>
               <span className="opend" style={Selected==6? style2 : style1}></span></div>
               </li>
             </ul>  
           </div>
            <div style={Selected==1? style2 : style1}>
                 <Mpcontainer img1={hd1}/>
            </div>
            <div style={Selected==2? style2 : style1}>
                <Mpcontainer img1={m2}/></div>
            <div style={Selected==3? style2 : style1}>
                <Mpcontainer img1={tvp}/></div>
            <div style={Selected==4? style2 : style1}>
                <Mpcontainer img1={Bsp}/></div>
            <div style={Selected==5? style2 : style1}>
                <Mpcontainer img1={w4}/></div>
            <div style={Selected==6? style2 : style1}>
                <Mpcontainer img1={ts7}/></div>
       </div>
       <div className="container">
           <h2 className="heading2">Mobile</h2>
           <div id="innavbar2">
               <ul>
               <li className='tabs'><div className="intabs" onClick={() =>{
                   setSelected2(1); }}>
                       <a>Galaxy Z Flip3 5G</a>
                       <span className="opend" style={Selected2==1? style2 : style1}></span>
               </div>
               </li>
               <li className='tabs'><div className="intabs" onClick={() =>{
                   setSelected2(2);
               }}><a>Galaxy Tab S7 FE</a>
               <span className="opend" style={Selected2==2? style2 : style1}></span>
               </div></li>
               <li className='tabs'><div className="intabs" onClick={() =>{
                   setSelected2(3);
               }}><a>Galaxy Watch4</a><span className="opend" style={Selected2==3? style2 : style1}></span>
               </div></li>
               <li className='tabs'><div className="intabs" onClick={() =>{
                   setSelected2(4);
               }}><a>Galaxy M52 5G</a><span className="opend" style={Selected2==4? style2 : style1}></span>
               </div></li>
               <li className='tabs'><div className="intabs" onClick={() =>{
                   setSelected2(5);
               }}><a>Galaxy A52 5G</a><span className="opend" style={Selected2==5? style2 : style1}></span>
               </div></li>
               </ul>
           </div>
               <div style={Selected2==1? style2 : style1}><Mcon image={z3} mname="Galaxy Z Flip3 5G" cb="₹7000 cashback* on all bank cards or upgrade bonus"/></div>
                <div style={Selected2==2? style2 : style1}><Mcon image={t7} mname="Galaxy Tab S7 FE" cb="31.5cm (12.4) Display | S Pen in Box | 10090mAH Battery | Additional ₹4000 Instant Cashback "/></div>
                <div style={Selected2==3? style2 : style1}><Mcon image={w4} mname="Galaxy Watch4" cb="Starting at ₹23999* | Get additional ₹3000 cashback* "/></div>
                <div style={Selected2==4? style2 : style1}><Mcon image={M5} mname="Galaxy M52 5G" cb="7.4mm sleek | SD 778G (6nm) | FHD+ sAMOLED+ 120Hz | 5G Guarantee  "/></div>
                <div style={Selected2==5? style2 : style1}><Mcon image={A5} mname="Galaxy A52 5G" cb="Snapdragon 778G | 120Hz sAMOLED | 5G Guarantee"/></div>
        </div>
        <div className="container2">
           <h2 className="heading3" style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>TV & AV</h2>
           <div id="innavbar3">
               <ul>
               <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected3(1); }}><a style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>Neo QLED 8K</a>
                   <span className="opend2" style={Selected3==1? style2: style1}></span>
                   </div></li>
               <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected3(2); }}><a style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>QLED 4K</a>
                   <span className="opend2" style={Selected3==2? style2 : style1} ></span>
                   </div></li>
                <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected3(3); }}><a style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>The Serif</a>
                   <span className="opend2" style={Selected3==3? style2 : style1}></span>
                   </div></li>
                <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected3(4); }}><a style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>The Frame</a>
                   <span className="opend2" style={Selected3==4? style2 : style1}></span>
                   </div></li>
                <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected3(5); }}><a style={(Selected3==2 || Selected3==4 || Selected3==5 ? color : null)}>Crystal 4K UHD</a>
                   <span className="opend2" style={Selected3==5? style2 : style1}></span>
                   </div></li>
               </ul>
           </div>
               <div  style={Selected3==1? style2 : style1}><Taconatiner img={eik} t1="Greatness never ends,but envoles."/></div>
               <div  style={Selected3==2? style2 : style1}><Taconatiner img={q4k} t1="A billion shades" t2="And cinematic sound" st={color}/></div>
               <div  style={Selected3==3? style2 : style1}><Taconatiner img={serif} t1="The Serif" motto="Uncoditionally Beautiful"/></div>
               <div  style={Selected3==4? style2 : style1}><Taconatiner img={frame} t1="The Frame | Make your own TV" st={color}/></div>
               <div  style={Selected3==5? style2 : style1}><Taconatiner img={tv} t1="Crystal 4K UHD" motto="Crystal Defination or Nothing" st={color} /></div>
        </div>
        <div className="container3">
        <h2 className="heading3">Home Appliance</h2>
           <div id="innavbar3">
               <ul>               
               <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected4(1); }}><a style={color}>BESPOKE Refrigerators</a>
                    <span className="opend white" style={Selected4==1? style2 : style1}></span>
                    </div></li>
              <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected4(2); }}><a style={color}>Curd Maestro™</a>
                    <span className="opend white" style={Selected4==2? style2 : style1}></span>
                    </div></li>
              <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected4(4); }}><a style={color}>WindFree™ AC</a> 
                    <span className="opend white" style={Selected4==4? style2 : style1}></span>
                   </div></li>
              <li className='tabs'><div className="intabs2" onClick={() =>{
                   setSelected4(5);}}><a style={color}>IntensiveWash Dishwasher™</a> 
                    <span className="opend white" style={Selected4==5? style2 : style1}></span>
                   </div></li>
               </ul>    
           </div>
           <div style={Selected4==1? style2 : style1}><HAcontainer img={hak} t1="BESPOKE Refrigerators" motto="Designed  for you, by you | 20% cashback" st={color}/></div>
           <div style={Selected4==2? style2 : style1}><HAcontainer img={ha2} t1="Curd Maestro™" motto="Makes tasty and hygienic curd"  st={color}/></div>
           <div style={Selected4==4? style2 : style1}><HAcontainer img={ha3} t1="WindFree™ AC" motto=""/></div>
           <div style={Selected4==5? style2 : style1}><HAcontainer img={ha4} t1="IntensiveWash Dishwasher™" motto="Eliminates up to 99.9% food bacteria*"/></div>
        </div>
        <div className="container">
           <h2 className="heading">Explore #DoWhatYoucant</h2>
              <img src={lp} className="inltab"/>
           <div className="inrtab topspacer"> 
                           <div className="blackline"></div>
                       <div className="list">
                           <span className="index">01</span>
                           <div>
                            <p className="rules"> Try On Digital Fashion With Ready-to-Wear AR Filters</p><br/>
                           <a className="learnmore">Learn More</a>
                           <hr/>
                           </div>
                       </div>
                       
                           <div className="blackline"></div>
                       <div className="list">
                           <span className="index">01</span>
                           <div>
                            <p className="rules"> Try On Digital Fashion With Ready-to-Wear AR Filters</p><br/>
                           <a className="learnmore">Learn More</a>
                           <hr/>
                           </div>
                       </div>

                           <div className="blackline"></div>
                       <div className="list">
                           <span className="index">01</span>
                           <div>
                            <p className="rules"> Try On Digital Fashion With Ready-to-Wear AR Filters</p><br/>
                           <a className="learnmore">Learn More</a>
                           <hr/>
                           </div>
                       </div>
                           <div className="blackline"></div>
                       <div className="list">
                           <span className="index">01</span>
                           <div>
                            <p className="rules"> Try On Digital Fashion With Ready-to-Wear AR Filters</p><br/>
                           <a className="learnmore">Learn More</a>
                           <hr/>
                           </div>
                       </div>
                           <div className="blackline"></div>
                       <div className="list">
                           <span className="index">01</span>
                           <div>
                            <p className="rules"> Try On Digital Fashion With Ready-to-Wear AR Filters</p><br/>
                           <a className="learnmore">Learn More</a>
                           <hr/>
                           </div>
                       </div>
           </div>
       </div>
       <div className="container" id="searchtab">
         <h2 className="heading">Looking For Something Else?</h2>
         <input className="searchbar" placeholder="Search keyboard"/>
          <div id="tabcontainer">
              <a className="ntabs">Galaxy S21 Ultra 5G</a>
              <a className="ntabs">Galaxy Note 20</a>
              <a className="ntabs">QLED 8K</a>
              <a className="ntabs">UHD TVs</a>
              <a className="ntabs">Eco bubble</a><br/><br/>
              <a className="ntabs">UHD TVs</a>
              <a className="ntabs">Eco bubble</a>
          </div>
          <div className="txtcontainer">
             <p>*Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
             <p>*Image of Galaxy Z Fold3 5G, Galaxy Z Flip3 5G and S Pen Fold Edition simulated for illustration purposes.
             </p>
             <p>*The S pen Fold Edition sold separately and is only compatible with Galaxy Z Fold3 5G.
             </p>
             <p>*Image of two Galaxy Z Fold3 5G phones and S Pen Fold Edition simulated for illustration purposes.
             </p>
             <p>*5G Devices are 5G ready, connectivity dependent on network availability. 
             </p>
          </div>
          <table id="table">
              <tr>
                  <td className="tableh">Product & Service</td>
                  <td className="tableh">Shop</td>
                  <td className="tableh">Support</td>
                  <td className="tableh">Account & Community</td>
                  <td className="tableh noborder">Sustainability</td>
              </tr>
              <tr>
                  <td><a>Smart Phones</a></td>
                  <td><a>Cancellation & Return Policy</a></td>
                  <td><a>Whatsapp Us</a></td>
                  <td><a>My Page</a></td>
                  <td className="noborder"><a>Overview</a></td>
              </tr>
              <tr>
                  <td><a>Tablets</a></td>
                  <td><a>Track Order Status</a></td>
                  <td><a>Chat with Us</a></td>
                  <td><a>My Products</a></td>
                  <td className="noborder"><a>Environment</a></td>
              </tr>
              <tr>
                  <td><a>Audio Sound</a></td>
                  <td><a>20K Advantage</a></td>
                  <td><a>Sign Language</a></td>
                  <td><a>Orders</a></td>
                  <td className="noborder"><a>Corporate Citizenship</a></td>
              </tr>
              <tr>
                  <td><a>Watches</a></td>
                  <td><a>Samsung Referral Advantage</a></td>
                  <td><a>Email Us</a></td>
                  <td><a>Wishlist</a></td>
                  <td className="noborder"><a>Digital Responsibility</a></td>
              </tr>
              <tr>
                  <td><a>Smart Switch</a></td>
                  <td><a>Samsung Student Advantage</a></td>
                  <td><a>Call Us</a></td>
                  <td><a>Vouchers</a></td>
                  <td className="noborder"><a>Labor & Human Rights</a></td>
              </tr>
              <tr>
                  <td><a>Mobile Accessories</a></td>
                  <td><a>Defence Purchase Program</a></td>
                  <td><a>Email the CEO</a></td>
                  <td><a>My Referrals</a></td>
                  <td className="noborder"><a>Diversity & Inclusion</a></td>
              </tr>
              <tr>
                  <td><a>TVs</a></td>
                  <td><a>Corporate Employee Program</a></td>
                  <td><a>Community</a></td>
                  <td><a>Service</a></td>
                  <td className="noborder"><a>Sustainable Supply Chain</a></td>
              </tr>
              <tr>
                  <td><a>Sound Devices</a></td>
                  <td><a>Corporate Bulk Purchase</a></td>
                  <td><a>Product Registration</a></td>
                  <td><a>Community</a></td>
                  <td className="noborder"><a></a></td>
              </tr>
              <tr>
                  <td><a>Refrigerators</a></td>
                  <td><a>Samsung Experience Store</a></td>
                  <td><a>Service Centre</a></td>
                  <td><a>Subscribe</a></td>
                  <td className="noborder tableh"><a>About Us</a></td>
              </tr>
              <tr>
                  <td><a>Laundry</a></td>
                  <td><a>Store Locator</a></td>
                  <td><a>Give Feedback</a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Company info</a></td>
              </tr>
              <tr>
                  <td><a>Air Solutions</a></td>
                  <td><a>Smart Club</a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Business Area</a></td>
              </tr>
              <tr>
                  <td><a>Cooking Appliance</a></td>
                  <td><a>FAQs</a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Brand Identity</a></td>
              </tr>
              <tr>
                  <td><a>Moniters</a></td>
                  <td><a> Terms of Use</a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Careers</a></td>
              </tr>
              <tr>
                  <td><a>Memory Storage</a></td>
                  <td><a>Grievance Redressal</a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Investor Relations</a></td>
              </tr>
              <tr>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Newsroom</a></td>
              </tr>
              <tr>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Ethics</a></td>
              </tr>
              <tr>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a>Samsung Design</a></td>
              </tr>
              <tr>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td><a></a></td>
                  <td className="noborder"><a></a></td>
              </tr>
              
          </table>
          <div className="txtcontainer2">
             <p>    Copyright ⓒ 1995-2021 SAMSUNG All Rights reserved. </p>
            <div id="sw"><p>Designed by <h2 id="name">SPARK</h2></p>
            </div>
          </div>
       </div>
    </div>
  )
}
export default Maintab;