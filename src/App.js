
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import AddCar from "./cars/AddCar";
import EditCar from "./cars/EditCar";
import RegisteredCars from "./cars/RegisteredCars";
import UnRegisteredCars from "./cars/UnRegisteredCars";
import SearchAndFilterCar from "./cars/SearchAndFilterCar";

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/addCar" element={<AddCar/>}/>
                <Route exact path="/editCar/:id" element={<EditCar/>}/>
                <Route exact path="/registeredCars" element={<RegisteredCars/>}/>
                <Route exact path="/unRegisteredCars" element={<UnRegisteredCars/>}/>
                <Route exact path="/searchAndFilterByRange/:startYear?/:endYear?/:search?" element={<SearchAndFilterCar/>}/>
            </Routes>

        </Router>

    </div>
  );
}

export default App;
