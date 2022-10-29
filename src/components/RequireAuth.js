import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from ".././context/AuthContext";
import { useContext } from "react";

const RequireAuth = () => {
	const location = useLocation();
	const { currentUser, loading } = useContext(AuthContext);

	if (loading) {
		return null; // or loading spinner, etc
	}

	return (
		currentUser
			? <Outlet />
			: <Navigate to="/login" state={{ from: location }} replace />
	);
}

export default RequireAuth;