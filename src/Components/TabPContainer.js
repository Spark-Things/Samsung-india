import React,{useState} from 'react';
import '../Components/TabPConatiner.css';
import Subcontainer from '../Components/Subcontainer';
import TabS22 from '../Images/TabS22.png';
import tabPic2 from '../Images/tabPic2.png';
import tabPic3 from '../Images/tabPic3.png';
import tabPic4 from '../Images/tabPic4.png';
import Tab from "../Images/Tab.jpg";
function TabPContainer() {
  const [display, setDisplay] = useState('1');
  const style1 ={
    display:"none"
  }
  const style2 ={
    display:"block"
  }
  return (
    <>
       <div className='leftSubcontainer'>
           <Subcontainer name="Galaxy S22 ultra" img={TabS22}/>
           <Subcontainer img={tabPic2} name="Galaxy Watch 4 Classic"/>
       </div>
       <div className='midconatiner'onMouseOver={()=>setDisplay(0)} onMouseOut={()=>setDisplay(1)}>
              <h2>Seamless connectivity</h2>
              <p style={(display==1) ? style2 : style1}>Streamline Your life with the galaxy ecosystem</p>
              <button className='buybutton tabbtn' style={(display==1) ? style1 : style2}>Learn More</button>
              <img src={Tab}/>
       </div>
       <div className='leftSubcontainer'>
           <Subcontainer img={tabPic3} name="Galaxy buds Pro"/>
           <Subcontainer img={tabPic4} name="Galaxy Tab S8 Series"/>
       </div>
    </>
  )
}

export default TabPContainer