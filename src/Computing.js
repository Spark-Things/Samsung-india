import './Mobile.css';
function Computing() {
  function show4() {
    document.getElementById("compu").style.display ="block";
  }
  function hide4() {
    document.getElementById("compu").style.display = "none";
  }
  return(
      <>
         <div id="Mobiletab" onMouseOver={show4} onMouseOut={hide4}>
            <h2 id="heads">Computing</h2>
           <div className='mconatiner'>
              <li className="lists">Featured</li>
              <li className="lists">Computer Moniters</li>
              <li className="lists">Memory & Storage</li>
              <li className="lists">e-catalog</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'></div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide4}>close</button>
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
export default Computing;