import Subcontainer from "../Components/Subcontainer"
function Mpcontainer(props) {
  return(
    <>
               <img src={props.img1} className="inltab"></img>
           <div className="inrtab">
               <Subcontainer/>
               <Subcontainer/>
               <Subcontainer/>
               <Subcontainer/>
           </div>
    </>
  )
}
export default Mpcontainer;