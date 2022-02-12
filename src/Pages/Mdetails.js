import react,{useState} from "react";
import MobileCard from "../Components/MobileCard";
import Navbar from "../Components/Navbar";
import MC1 from "../Images/MC1.png";
import MC2 from "../Images/MC2.png";
import MC3 from "../Images/MC3.png";
import MC4 from "../Images/MC4.png";
import MC5 from "../Images/MC5.png";
import MC6 from "../Images/MC6.png";
import s22 from "../Images/s22.mp4";
import './Mdetails.css';
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
          <video src={s22} loop className="Mobile_video_cover" controls autoPlay controls></video>
     </div>
    </div>
  )
}
export default Mdetails;