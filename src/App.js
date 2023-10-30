import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import NavBar from './component/counter';
import Banner from './component/context';

function App() {
  return (
    <div className="App">
     <NavBar/>
    
     <Banner/>
    </div>
  );
}

export default App;
