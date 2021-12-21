import './Mobile.css';
function Displays() {
  function show5() {
    document.getElementById("Displays").style.display ="block";
  }
  function hide5() {
    document.getElementById("Displays").style.display = "none";
  }
  return(
      <>
         <div id="Mobiletab" onMouseOver={show5} onMouseOut={hide5}>
            <h2 id="heads">Displays</h2>
           <div className='mconatiner'>
              <li className="lists">Featured</li>
              <li className="lists">Moniters</li>
              <li className="lists">Smart Signage</li>
              <li className="lists">LED Signage</li>
            </div>
            <div id='righttab'>
                  <div id='lcontent'></div>
                <div id='rcontent'>
                  <div className='upernav'>
                    <button className='cbtn' onClick={hide5}>close</button>
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
export default Displays;