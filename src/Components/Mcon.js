function Mcon(props) {
  return(
        <>
           <div className="inltab2">
              <img src={props.image} />
           </div><br/>
           <div className="concontent">
           <h1 className="Nameholder">{props.mname}</h1>
           <p className="cashback">{props.cb}</p>
           <a className="learnmore">Learn More</a>
           <button className="buybutton">Buy Now</button>
           </div>
        </>   
           )
}
export default Mcon;