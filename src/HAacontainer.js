function HAcontainer(props) {
  return(
    <>
              <img src={props.img} className="aimg"/>
           <div className="concontent2" style={props.st}>
           <h1 className="Nameholder">{props.t1}</h1>
           <h1 className="Nameholder">{props.t2}</h1>
           <p>{props.motto}</p>
           <a className="learnmore">Learn More</a>
           <button className="buybutton2">Buy Now</button>
           </div>
    </>
  )
}
export default HAcontainer;