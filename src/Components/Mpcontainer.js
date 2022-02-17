import Subcontainer from "../Components/Subcontainer"
import of1 from "../Images/of1.png";
import of2 from "../Images/of2.png";
import of4 from "../Images/of4.png";
// import of1 from "../Images/of1.png";
function Mpcontainer(props) {
  return(
    <>
               <img src={props.img1} className="inltab"></img>
           <div className="inrtab">
               <Subcontainer img={of1} name="Galaxy Z flip3 5G"/>
               <Subcontainer img={of2}/>
               <Subcontainer img={of4}/>
               <Subcontainer/>
           </div>
    </>
  )
}
export default Mpcontainer;