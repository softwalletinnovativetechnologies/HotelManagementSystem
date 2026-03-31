import { useEffect, useState } from "react";
import API from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await API.get("/users/profile");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProfile();
  }, []);

  if (!user) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 bg-[#f4f7fb]">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
