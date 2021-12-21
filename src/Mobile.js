import './Mobile.css';
function Mobile() {
  function hide() {
    document.getElementById("mobile").style.display = "none";
  } 
  function show() {
    document.getElementById("mobile").style.display = "block";
   }
  return(
    <>
       <div id="Mobiletab" onMouseOver={show} onMouseOut={hide}>
          <h2 id="heads">Mobile</h2>
         <div className='mconatiner'>
            <li className="lists">Featured</li>
            <li className="lists">Smart Phones</li>
            <li className="lists">Tablets</li>
            <li className="lists">Watches</li>
            <li className="lists">Galaxy Buds</li>
            <li className="lists">Accessories</li>
            <li className="lists">One UI</li>
            <li className="lists">Why Galaxy</li>
            <li className="lists">Samsung Care+</li>
            <li className="lists">e-catalog</li>
          </div>
          <div id='righttab'>
                <div id='lcontent'></div>
              <div id='rcontent'>
                <div className='upernav'>
                  <button className='cbtn' onClick={hide}>close</button>
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
export default Mobile;