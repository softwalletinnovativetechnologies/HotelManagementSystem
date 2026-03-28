import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Services from "./pages/Services";
import RoomDetails from "./pages/RoomDetails";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
