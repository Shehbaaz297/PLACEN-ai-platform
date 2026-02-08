import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

function ProtectedRoute({ allowedRole, children }) {
	const currentUser = getCurrentUser();

	// If no user is logged in, redirect to login
	if (!currentUser) {
		return <Navigate to="/login" replace />;
	}

	// If user role doesn't match, redirect to login
	if (currentUser.role !== allowedRole) {
		return <Navigate to="/login" replace />;
	}

	// User is authenticated and has the correct role
	return children;
}

export default ProtectedRoute;
