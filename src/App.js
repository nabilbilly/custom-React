import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import NavBar from './component/navigationbar';
import Banner from './component/bannersection';
import TrustedCompany from './component/endorsementsection';
import About from './component/about';
import Fields from './component/Expert'
// import Fields from './component/experts'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <TrustedCompany/>
     <About/>
     <Fields/>
    
    </div>
  );
}

export default App;
