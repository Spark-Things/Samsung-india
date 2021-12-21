import './Mobile.css';
function Tv() {
  function show2() {
    document.getElementById("tv").style.display = "block";
   }
  function hide2() {
    document.getElementById("tv").style.display = "none";
  }
  return(
      <>
         <div id="Mobiletab" onMouseOver={show2} onMouseOut={hide2}>
            <h2 id="heads">TV & AV</h2>
           <div className='mconatiner'>
              <li className="lists">Featured</li>
              <li className="lists">TVs</li>
              <li className="lists">Lifestyle TVs</li>
              <li className="lists">TV by Size</li>
              <li className="lists">Sound Devices</li>
              <li className="lists">Care Packs</li>
              <li className="lists">e-catalog</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'></div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide2}>close</button>
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
export default Tv;