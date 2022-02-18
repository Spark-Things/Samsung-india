import Subcontainer from "../Components/Subcontainer"
// import of1 from "../Images/of1.png";
function Mpcontainer(props) {
  return(
    <>
               <img src={props.img1} className="inltab"></img>
           <div className="inrtab">
               <Subcontainer img={props.img2} name={props.title1}/>
               <Subcontainer img={props.img3} name={props.title2}/>
               <Subcontainer img={props.img4} name={props.title3}/>
               <Subcontainer img={props.img5} name={props.title4}/>
           </div>
    </>
  )
}
export default Mpcontainer;