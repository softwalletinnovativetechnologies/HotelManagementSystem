import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ not admin
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  // ✅ admin allowed
  return children;
}

export default AdminRoute;
