import {useState} from 'react';
import './Maintab.css';
import Navbar from "./Navbar";
import Subcontainer from './Subcontainer';
import left from './left.png';
import forward from './forward.png';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
function Maintab() {
    const style1={
        display: "none"
    }
    const style2={
        display: "block"
    }
    const [Show, setShow] = useState(1);
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
               <div className="intabs">
               <a>Offers for You</a>
               <span className="opend"></span>
               </div>
               <div className="intabs">
               <a>Mobile</a>
               <span className="opend"></span>
               </div>
               <div className="intabs">
               <a>TV</a>
               <span className="opend"></span>
               </div>
               <div className="intabs">
               <a>Appliance</a>
               <span className="opend"></span>
               </div>
               <div className="intabs">
               <a>Accessories & Watches</a>
               <span className="opend"></span>
               </div>
               <div className="intabs">
               <a>Tablets</a>
               <span className="opend"></span></div>
           </div>
           <div className="inltab">
              <span>Hello mc</span>
           </div>
           <div className="inrtab">
               <Subcontainer/>
               <Subcontainer/>
               <Subcontainer/>
               <Subcontainer/>
           </div>
       </div>
       <div className="container">
           <h2 className="heading">Mobile</h2>
           <div id="innavbar2">
               <a className="intabs">Galaxy Z Flip3 5G</a>
               <a className="intabs">Galaxy Tab S7 FE</a>
               <a className="intabs">Galaxy Watch4</a>
               <a className="intabs">Galaxy z Fold3 5G</a>
               <a className="intabs">Galaxy M22 5G</a>
           </div>
           <div className="inltab2">
              <span>Hello mc</span>
           </div><br/>
           <div className="concontent">
           <h1 className="Nameholder">Mobile Name</h1>
           <p className="cashback">₹7000 cashback* on HDFC bank cards</p>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
           </div>
        </div>
        <div className="container2">
           <h2 className="heading">TV & AV</h2>
           <div id="innavbar">
               <a className="intabs white">Neo QLED 8K</a>
               <a className="intabs white">QLED 4K</a>
               <a className="intabs white">The Serif</a>
               <a className="intabs white">The Frame</a>
               <a className="intabs white">Crystal 4K UHD</a>
           </div>
           <div className="inltab2">
              <span>Hello mc</span>
           </div><br/>
           <div className="concontent">
           <h1 className="Nameholder white">Greatness never ends,but envoles.</h1>
           <a className="learnmore white">Learn More</a>
           <button className="buybutton2">Buy Now</button>
           </div>
        </div>
        <div className="container3">
        <h2 className="heading">Home Appliance</h2>
           <div id="innavbar2">
               <a className="intabs">BESPOKE Refrigerators</a>
               <a className="intabs">Curd Maestro™</a>
               <a className="intabs">AI Ecobubble™</a>
               <a className="intabs">WindFree™ AC</a>
               <a className="intabs">IntensiveWash Dishwasher™</a>
           </div>
           <div className="inltab2">
              <span>Hello mc</span>
           </div>
           <div className="concontent">
           <h1 className="Nameholder">Appliance Name</h1>
           <p className="cashback">₹7000 cashback* on HDFC bank cards</p><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
           </div>
        </div>
        <div className="container">
           <h2 className="heading">Explore #DoWhatYoucant</h2>
           <div className="inltab">
              <span>Hello mc</span>
           </div>
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
       <div className="container">
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