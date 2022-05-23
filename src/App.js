import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Parts/Purchase';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
      </Routes>
    </div>
  );
}

export default App;
