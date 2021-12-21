function Explore() {
  function show7() {
    document.getElementById("Explore").style.display ="block";
  }
  function hide7() {
    document.getElementById("Explore").style.display = "none";
  } 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show7} onMouseOut={hide7}>
            <h2 id="heads">Explore</h2>
           <div className='mconatiner'>
              <li className="lists">Stories</li>
              <li className="lists">Brand</li>
              <li className="lists">How to</li>
              <li className="lists">Experiances</li>
              <li className="lists">Community</li>
              <li className="lists">Corporate Citizenship</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'></div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide7}>close</button>
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
export default Explore;