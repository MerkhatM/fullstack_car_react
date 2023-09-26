
import './App.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
