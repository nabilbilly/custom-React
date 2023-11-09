import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import NavBar from './component/counter';
import Banner from './component/context';
import Sponser from './component/endorsed';
import Chat from './component/sponsers';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Sponser/>
     <Chat/>
    
    </div>
  );
}

export default App;
