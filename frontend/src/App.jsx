import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Services from "./pages/Services";
import RoomDetails from "./pages/RoomDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";

import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";

import AdminDashboard from "./pages/AdminDashboard";
import AdminRooms from "./pages/AdminRooms";
import AdminBookings from "./pages/AdminBookings";
import AdminUsers from "./pages/AdminUsers";

function AppContent() {
  const location = useLocation();

  // ✅ detect admin route
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* ✅ Navbar only for normal pages */}
      {!isAdmin && <Navbar />}

      <Routes>
        {/* ===== NORMAL ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* ===== ADMIN ROUTES (PROTECTED + CLEAN) ===== */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* ✅ ONLY dashboard pe stats/charts */}
          <Route index element={<AdminDashboard />} />

          <Route path="rooms" element={<AdminRooms />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>

      {/* ✅ Footer only for normal pages */}
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
