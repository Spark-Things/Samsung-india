import './Mobile.css';
function Offers() {
  function show6() {
    document.getElementById("Offers").style.display ="block";
  }
  function hide6() {
    document.getElementById("Offers").style.display = "none";
  } 
  return(
    <>
       <div id="Mobiletab" onMouseOver={show6} onMouseOut={hide6}>
          <h2 id="heads">Offers</h2>
         <div className='mconatiner'>
            <li className="lists">View All Offers</li>
            <li className="lists">Smart Ways To Buy</li>
            <li className="lists">Samsung Live</li>
            <li className="lists">Shop Mobile</li>
            <li className="lists">Shop Tablets</li>
            <li className="lists">Shop Wareables</li>
            <li className="lists">Shop Accessories</li>
            <li className="lists">Shop Television</li>
            <li className="lists">Shop Home Appliance</li>
            <li className="lists">Shop Moniters</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'></div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide6}>close</button>
                 </div>
                 <div id='vertical'></div> 
                  <div className='rncontent'>
                       <img className='imgs'/>
                     <p className='pname'>Galaxy fold 3</p>
                     <p className='pname'>buy now</p>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}
export default Offers;