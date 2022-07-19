import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing';
import { Listings } from './components/Listings';
function App() {
  return (
    <div className="App">
      <Landing/>  
      <Listings/>

      <Navbar/>
    </div>
  );
}

export default App;
