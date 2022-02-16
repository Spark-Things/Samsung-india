import {react,useState} from 'react';
import './Subcontainer.css'
function Subcontainer(props) {
  const [display, setDisplay] = useState('1');
  const style1 ={
    display:"none"
  }
  const style2 ={
    display:"block"
  }
  return(
    <div className="subcontainer" onMouseOver={()=>setDisplay(0)} onMouseOut={()=>setDisplay(1)}>
         <img src={props.img} alt='img'/><br/>
         <h3 style={(display==1) ? style2 : style1}>{props.name}</h3>
         <button className='buybutton samllLaters' style={(display==1) ? style1 : style2}>Learn More</button>
    </div>
  )
}
export default Subcontainer;