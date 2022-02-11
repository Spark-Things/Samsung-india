import Navbar from "../Components/Navbar"
function Mdetails() {
  
  return(
    <>
     <Navbar/>
     <div id="Slider">
         <div id="slide1">
         <img  className="simg"/>
         <div className="discp">
         <h1 className="sdisp">Galaxy Z </h1>
         <h1 className="sdisp">Fold3 | Flip3 5G </h1><br/>
         <p className="cashback">₹7000 cashback* on HDFC bank cards</p><br/><br/>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
         </div>
           <button className="preb"></button>
           <button className="nextb"></button>
         </div>
       </div>  
    </>
  )
}
export default Mdetails;