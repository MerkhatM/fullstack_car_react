
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import AddCar from "./cars/AddCar";
import EditCar from "./cars/EditCar";
import RegisteredCars from "./cars/RegisteredCars";
import UnRegisteredCars from "./cars/UnRegisteredCars";
import SearchAndFilterCar from "./cars/SearchAndFilterCar";
import CategoryPage from "./pages/CategoryPage";
import CountryPage from "./pages/CountryPage";
import AddCategory from "./categories/AddCategory";
import EditCategory from "./categories/EditCategory";
import AddCountry from "./countries/AddCountry";
import EditCountry from "./countries/EditCountry";

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

                <Route exact path="/categoryPage" element={<CategoryPage/>}/>
                <Route exact path="/addCategory" element={<AddCategory/>}/>
                <Route exact path="/editCategory/:id" element={<EditCategory/>}/>


                <Route exact path="/countryPage" element={<CountryPage/>}/>
                <Route exact path="/addCountry" element={<AddCountry/>}/>
                <Route exact path="/editCountry/:id" element={<EditCountry/>}/>
            </Routes>

        </Router>

    </div>
  );
}

export default App;
