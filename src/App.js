import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Maintab from "../src/Components/Maintab";
import Mdetails from "../src/Pages/Mdetails";
import './App.css';
function App() {
  return (
    <>
      <Router>
         <Routes>
         <Route path="/" element={<Maintab />} />
         <Route path="/Mobiles"  element={<Mdetails/>}/>
         </Routes> 
      </Router>
    </>
  );
}

export default App;
