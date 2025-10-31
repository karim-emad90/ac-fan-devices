import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Fan from "./pages/Fan";
import AirConditioner from "./pages/AirConditioner";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fan" element={<Fan />} />
      <Route path="/ac" element={<AirConditioner />} />
      <Route path="/home" element={<Home />} />
    </Routes>
     
      
    </BrowserRouter>

  )
}