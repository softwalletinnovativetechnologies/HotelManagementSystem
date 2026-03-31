import { useEffect, useState } from "react";
import API from "../api/axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    capacity: 1,
    image: "",
    description: "",
    amenities: [],
  });

  const [amenityInput, setAmenityInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await API.get("/rooms");
      setRooms(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "price" || name === "capacity"
          ? Number(value) // 🔥 MAIN FIX
          : value,
    });
  };

  // 🔥 ADD AMENITY
  const addAmenity = () => {
    if (!amenityInput.trim()) return;

    setForm({
      ...form,
      amenities: [...form.amenities, amenityInput],
    });

    setAmenityInput("");
  };

  // 🔥 REMOVE AMENITY
  const removeAmenity = (index) => {
    const updated = form.amenities.filter((_, i) => i !== index);
    setForm({ ...form, amenities: updated });
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        price: Number(form.price),
        capacity: Number(form.capacity),
      };

      console.log("SENDING:", payload);

      if (editingId) {
        await API.put(`/rooms/${editingId}`, payload);
      } else {
        await API.post("/rooms", payload);
      }

      resetForm();
      fetchRooms();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this room?")) return;

    try {
      await API.delete(`/rooms/${id}`);
      fetchRooms();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 EDIT
  const handleEdit = (room) => {
    setEditingId(room._id);
    setForm({
      name: room.name,
      price: room.price,
      capacity: room.capacity || 1,
      image: room.image || "",
      description: room.description || "",
      amenities: room.amenities || [],
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      capacity: 1,
      image: "",
      description: "",
      amenities: [],
    });
    setEditingId(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">
        Rooms Management
      </h2>

      {/* 🔥 FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow grid md:grid-cols-3 gap-4 mb-6"
      >
        <input
          name="name"
          placeholder="Room Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="capacity"
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-3 rounded col-span-full"
        />

        <textarea
          name="description"
          placeholder="Room Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded col-span-full"
        />

        <button className="bg-[#0f2027] text-white py-3 rounded col-span-full hover:opacity-90">
          {editingId ? "Update Room" : "+ Add Room"}
        </button>
      </form>

      {/* 🔥 AMENITIES */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex gap-2 mb-3">
          <input
            placeholder="Add amenity (WiFi, AC, TV...)"
            value={amenityInput}
            onChange={(e) => setAmenityInput(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={addAmenity}
            className="bg-[#0f2027] text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {form.amenities.map((a, i) => (
            <span
              key={i}
              onClick={() => removeAmenity(i)}
              className="bg-gray-200 px-3 py-1 rounded cursor-pointer hover:bg-red-200"
            >
              {a} ❌
            </span>
          ))}
        </div>
      </div>

      {/* 🔥 TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Capacity</th>
              <th>Amenities</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="border-t text-center">
                <td className="p-3">
                  {room.image ? (
                    <img
                      src={room.image}
                      className="w-20 h-14 object-cover rounded mx-auto"
                    />
                  ) : (
                    <div className="w-20 h-14 bg-gray-200 rounded mx-auto" />
                  )}
                </td>

                <td>{room.name}</td>
                <td>₹{room.price}</td>
                <td>{room.capacity || "-"}</td>
                <td className="text-sm">
                  {room.amenities?.length ? room.amenities.join(", ") : "-"}
                </td>

                <td className="flex gap-3 justify-center py-4">
                  <FaEdit
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(room)}
                  />
                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(room._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminRooms;
