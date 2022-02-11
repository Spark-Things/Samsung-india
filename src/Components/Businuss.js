import '../Components/Mobile.css';
function Businuss() {
  function show9() {
    document.getElementById("Businuss").style.display ="block";
  }
   function hide9() {
   document.getElementById("Businuss").style.display = "none";
  } 
  return(
      <>
         <div id="Mobiletab" onMouseOver={show9} onMouseOut={hide9}>
            <h2 id="heads">For Business</h2>
           <div className='mconatiner'>
              <li className="lists">Business Home</li>
              <li className="lists">Mobile</li>
              <li className="lists">Displays</li>
              <li className="lists">System Air Conditioners</li>
              <li className="lists">Computing</li>
              <li className="lists">Industries</li>
              <li className="lists">Insights</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'></div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide9}>close</button>
                   </div>
                    <div className='rncontent'>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}
export default Businuss;