import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <h4 className="text-white">Hotel</h4>

      <div>
        <Link to="/" className="text-white mx-2">
          Home
        </Link>
        <Link to="/rooms" className="text-white mx-2">
          Rooms
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
