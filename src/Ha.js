import './Mobile.js';
function Ha() {
  function show3() {
    document.getElementById("ha").style.display ="block";
  }
  function hide3() {
    document.getElementById("ha").style.display = "none";
  }  
  return(
    <>
       <div id="Mobiletab" onMouseOver={show3} onMouseOut={hide3}>
          <h2 id="heads">Home Appliance</h2>
         <div className='mconatiner'>
            <li className="lists">Featured</li>
            <li className="lists">BESPOKE</li>
            <li className="lists">Refrigerators</li>
            <li className="lists">Washing Machine & Dryers</li>
            <li className="lists">AirDresser</li>
            <li className="lists">Cooking Appliance</li>
            <li className="lists">Dishwasers</li>
            <li className="lists">Air Conditioners</li>
            <li className="lists">Air Purifier</li>
            <li className="lists">Care Packs</li>
            <li className="lists">e-catalog</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'></div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide3}>close</button>
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
export default Ha;