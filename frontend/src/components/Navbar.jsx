import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-gray-800">HotelMS</h1>

        {/* Links */}
        <div className="space-x-6 hidden md:flex text-gray-600">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/rooms" className="hover:text-black">
            Rooms
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
