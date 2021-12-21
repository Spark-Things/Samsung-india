import './Mobile.css';
function Support() {
  function show8() {
    document.getElementById("Support").style.display ="block";
  }
  function hide8() {
    document.getElementById("Support").style.display = "none";
  }
  return(
    <>
       <div id="Mobiletab" onMouseOver={show8} onMouseOut={hide8}>
          <h2 id="heads">Support</h2>
         <div className='mconatiner'>
            <li className="lists">Product Page</li>
            <li className="lists">Solution & Tips</li>
            <li className="lists">Repair Service</li>
            <li className="lists">Contact us</li>
            <li className="lists">Online shop Support</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'></div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide8}>close</button>
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
export default Support;