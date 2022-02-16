import react,{useState} from "react";
import MobileCard from "../Components/MobileCard";
import Mobiledis from "../Components/Mobiledis";
import Navbar from "../Components/Navbar";
import Subcontainer from "../Components/Subcontainer";

import MC1 from "../Images/MC1.png";
import MC2 from "../Images/MC2.png";
import MC3 from "../Images/MC3.png";
import MC4 from "../Images/MC4.png";
import MC5 from "../Images/MC5.png";
import MC6 from "../Images/MC6.png";
import s22 from "../Images/s22.mp4";
import s22p from "../Images/s22p.mp4";
import MD1 from "../Images/MD1.png";
import MD2 from "../Images/MD2.png";
import MD3 from "../Images/MD3.png";
import MD4 from "../Images/MD4.png";
import MDD1 from "../Images/MDD1.jpg";
import MDD2 from "../Images/MDD2.jpg";
import MDD3 from "../Images/MDD3.jpg";
import MDD4 from "../Images/MDD4.jpg";
import Tab_background from "../Images/Tab_background.jpg";
import Ti1 from "../Images/Ti1.jpg";
import Ti2 from "../Images/Ti2.jpg";
import Ti3 from "../Images/Ti3.jpg";
import Ti5 from "../Images/Ti5.jpg";
import toxic1 from "../Images/toxic1.png";
import toxic2 from "../Images/toxic2.png";
import toxic3 from "../Images/toxic3.png";
import toxic4 from "../Images/toxic4.png";
import './Mdetails.css';
import TabPContainer from "../Components/TabPContainer";
function Mdetails() {
   const [tab, setTab] = useState(1);
  const style1 ={
     display:"none"
   }
  const style2={
     display:"block"
   }
  return(
    <div className="Maintab">
     <Navbar/>  
     <div className="mobile_navigation">
          <a className="openName">Mobile</a>
          <div className="right_Mobile_Navigation">
          <div className="Mobile_intabs" onClick={()=>setTab(1)}>
                    <a style={(tab == 1)? {"color":"black"} : {"color":"#828282"}}>Smartphone</a>
               <span className="Mobile_opend" style={(tab == 1) ? style2 : style1}></span>
          </div>
          <div className="Mobile_intabs" onClick={()=>setTab(2)}>
                    <a style={(tab == 2)? {"color":"black"} : {"color":"#828282"}}>Tablets</a>
               <span className="Mobile_opend" style={(tab == 2) ? style2 : style1}></span>
          </div>
          <div className="Mobile_intabs" onClick={()=>setTab(3)}>
                    <a style={(tab == 3)? {"color":"black"} : {"color":"#828282"}}>Watches</a>
               <span className="Mobile_opend" style={(tab == 3) ? style2 : style1}></span>
          </div>
          <div className="Mobile_intabs" onClick={()=>setTab(4)}>
                    <a style={(tab == 4)? {"color":"black"} : {"color":"#828282"}}>Galaxy Buds</a>
               <span className="Mobile_opend" style={(tab == 4) ? style2 : style1}></span>
          </div>
          <div className="Mobile_intabs" onClick={()=>setTab(5)}>
                    <a style={(tab == 5)? {"color":"black"} : {"color":"#828282"}}>Accessories</a>
               <span className="Mobile_opend" style={(tab == 5) ? style2 : style1}></span>
          </div>
          </div>
     </div>
     <div className="Mobile-Container">
          <MobileCard img={MC1} Mname="Galaxy Z" Motto="Open Your World With Foldeble Smartphone"/>
          <MobileCard img={MC2} Mname="Galaxy S" Motto="Galaxy's Fastest Chipset and Best Camera"/>
          <MobileCard img={MC3} Mname="Galaxy Note" Motto="Powerful Pofermance plus S pen"/>
          <MobileCard img={MC4} Mname="Galaxy A" Motto="Galaxy innovation Made Accesible For All"/>
          <MobileCard img={MC5} Mname="Galaxy M" Motto="Power And Price at a Price You'll love"/>
          <MobileCard img={MC6} Mname="Compare" Motto="see which phone fit for you"/>
     </div>
     <div className="Unpacked_container">
          <h1>Explore all the new products from UNPACKED</h1>
          <div className="Mobile_verticalline"></div>
     </div>
     <div className="Mobile_video_container">
          <div className="TextonVideo">
              <h1 className="Mobile_container_title">Galaxy S22 Ultra</h1>
              <p>Welcome to the epic Standard</p><br/><br/>
              <button className="buybutton">Learn More</button>
          </div>
          <video src={s22} loop className="Mobile_video_cover" autoPlay></video>
     </div>
     <div className="MobileDis_Container">
         <Mobiledis image={MD1} title="S Pen" discription="The first Galaxy S with built in S-pen"/>
         <Mobiledis image={MD2} title="Nightography Camera" discription="Make nights epic with Nightography"/>
         <Mobiledis image={MD3} title="4nm Processor" discription="The fastest chip ever on a Galaxy"/>
         <Mobiledis image={MD4} title="Experience it now" discription="See Galaxy S22 Ultra in 360º AR"/>
     </div>
     <div className="Mobile_video_container">
          <div className="TextonVideo placebottom">
              <h1 className="Mobile_container_title">Galaxy S22 | S22+ </h1>
              <p>The phone that makes everyday epic.</p><br/><br/>
              <div className="samesize">
              <button className="buybutton noColor">Learn More</button>
              <div className='Horizontal_line'></div>
              </div>
          </div>
          <video src={s22p} loop className="Mobile_video_cover" autoPlay></video>
     </div>
     <div className="MobileDis_Container">
         <Mobiledis image={MDD1} title="Galaxy Pro-grade Camera" discription="It's a pro-grade kit that fits in one hand"/>
         <Mobiledis image={MDD2} title="Video at Night" discription="Nightography captures way past closing time"/>
         <Mobiledis image={MDD3} title="Battery" discription="Go out for the night without plugging in"/>
         <Mobiledis image={MDD4} title="Experience it now" discription="Explore Galaxy S22 | S22+ in 360º AR"/>
     </div>
     <div className="Mobile_video_container">
          <div className="TextonVideo placeleft">
              <h1 className="Mobile_container_title">Galaxy Tab S8 | S8+ | S8 Ultra </h1>
              <p>Space for limitless possibilities</p><br/><br/>
              <div className="samesize">
              <button className="buybutton btntext">Learn More</button>
              </div>
          </div>
          <img src={Tab_background}/>
     </div>
     <div className="MobileDis_Container">
         <Mobiledis image={Ti1} title="S Pen" discription="Ready for anything noteworthy"/>
         <Mobiledis image={Ti2} title="Video Calling" discription="Focused on keeping you connected"/>
         <Mobiledis image={Ti3} title="Multitasking" discription="Divide your screen. Conquer your day"/>
         <Mobiledis image={Ti5} title="Entertainment" discription="Your space to play on the go"/>
     </div>

     <div className="tabContainer">
          <h1>Amazing alone. Better together.</h1>
          <div>
                <TabPContainer/>
          </div>
     </div>
     <div className="tabContainer">
         <h1>Upgrading never felt so good</h1>
         <div>
              <div className="toxic">
                     <img src={toxic1}/>
                <div className="disppp">
                     <h2>Smart Switch</h2>
                     <p>Switching Made Simple</p>
                     <span>Learn More</span>
                </div>
              </div>
              <div className="toxic" style={{"backgroundColor" : "rgb(254 246 243)"}}>
                     <img src={toxic2}/>
                <div className="disppp">
                     <h2>Trade-in</h2>
                     <p>Trade in your old devices for a brand new Galaxy</p>
                </div>
              </div>
              <div className="toxic" style={{"backgroundColor" : "rgb(246 240 245)"}}>
                     <img src={toxic3}/>
                <div className="disppp">
                     <h2>Samsung Care+</h2>
                     <p>Enroll within 365 days of Purchase</p>
                     <span>Learn More</span>
                </div>
              </div>
              <div className="toxic" style={{"backgroundColor" : "rgb(247 245 242)"}}>
                     <img src={toxic4} />
                <div className="disppp">
                     <h2>Support</h2>
                     <p>Samsung Support on Spot</p>
                     <span>Learn More</span>
                </div>
              </div>
         </div>
     </div>
     <table id="table" style={{"float" : "left","margin" : "50px 0px"}}>
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
    
  )
}
export default Mdetails;