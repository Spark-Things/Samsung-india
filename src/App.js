// import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Maintab from "../src/Components/Maintab";
import Mdetails from "../src/Components/Mdetails";
import './App.css';
function App() {
  return (
    <>
       <Maintab/>
      {/* <Router>
         <Switch>
         <Route path="/" exact component={Miantab} />
         <Route path="/Mobiles" exact component={Mdetails}/>
         </Switch> 
      </Router> */}
    </>
  );
}

export default App;
