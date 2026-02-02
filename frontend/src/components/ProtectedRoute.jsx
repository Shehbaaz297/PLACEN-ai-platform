import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

function ProtectedRoute({ allowedRole, children }) {
	const currentUser = getCurrentUser();

	if (currentUser?.role === allowedRole) {
		return children;
	}

	return <Navigate to="/login" replace />;
}

export default ProtectedRoute;
