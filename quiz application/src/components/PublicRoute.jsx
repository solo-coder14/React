import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" replace /> : <Outlet />;
}