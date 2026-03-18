import { useEffect, useState } from "react";
import { getRooms } from "../api/api";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Rooms</h2>

      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4" key={room._id}>
            <div className="card p-3 mb-3">
              <h5>{room.name}</h5>
              <p>Type: {room.type}</p>
              <p>Price: ₹{room.price}</p>
              <p>Guests: {room.maxGuests}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
