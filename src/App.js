import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnSell from './Components/OnSell';
import YourCars from './Components/YourCars';
import CarForm from './Components/CarForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
           <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={ <CarForm/>}></Route>
        <Route path="/sell" element={<OnSell/>}></Route>
        <Route path="/yourcars" element={<YourCars/>}></Route>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
