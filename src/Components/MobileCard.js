import React from 'react'
import '../Components/MobileCrad.css';
function MobileCard(props) {
  return (
   <>
      <img alt='img here' className='MobileCard_image'src={props.img}/> 
      <div className='MobileCrad_details_conatiner'>
            <h4>{props.Mname}</h4>
            <p>{props.Motto}</p>
      </div>
   </>
  )
}

export default MobileCard