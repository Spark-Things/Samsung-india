import React from 'react'
import './Mobiledis.css';

function Mobiledis(props) {
  return (
   <div className='Mobiledis_card'>
     <img className='imgDetails' src={props.image}/>
     <div className='MobileDisscription_container'>
       <h3>{props.title}</h3>
       <p>{props.discription}</p>
         <div className='button_mid'>
            <a>Learn More</a>
            <div className='Horizontal_line'></div>
         </div>
     </div>
   </div>
  )
}

export default Mobiledis