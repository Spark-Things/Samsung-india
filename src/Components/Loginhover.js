import './Loginhover.css';
function Loginhover() {
  function show10() {
    document.getElementById("login").style.display ="block";
  }
   function hide10() {
   document.getElementById("login").style.display = "none";
  }
  return(
    <>
      <div className="loginhover"  onMouseOver={show10} onMouseOut={hide10}>
        <a className='atabs'>Login/Sign-up</a><br/>
        <a className='atabs'>Orders</a><br/>
        <a className='atabs'>Product Registration</a>
     </div>
    </>
  )
}
export default Loginhover;