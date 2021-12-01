import './Navbar.css';
import search from './search.png';
import cart from './cart.png';
import user from './user.png';
function Navbar(){
  return(
    <div id="Navbar">
      <p id="Logo">SAMSUNG</p>
      <a>Mobile</a>
      <a>TV & AV</a>
      <a>Home Appliance</a>
      <a>Computing</a>
      <a>Displays</a>
      <a>Offers</a>
     <div id="rightnav">
        <a>Explore</a>
        <a>Support</a>
        <a>For Businuss</a>
        <div>
         <button className="icon"><img src={search} className="navicon"/></button>
         <button className="icon"><img src={cart} className="navicon"/></button> 
         <button className="icon"><img src={user} className="navicon"/></button>    
        </div>   
    </div> 
    </div>
  )
}
export default Navbar;