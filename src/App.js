import logo from './logo.svg';
import './App.css';

import Routing from './components/routing';
 import Header from "./components/Header/Header"
// import Routing from './components/routing';
import Footer from './components/Footer/Footer';
// import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
     <Header/>
     {/* <Home/> */}
      <Routing/> 
     <Footer/>
    
    </div>
  );
}

export default App;
