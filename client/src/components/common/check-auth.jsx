import { useLocation, Navigate } from "react-router-dom";
const CheckAuth = ({ isAuthenticated, user, children }) => {

    const location = useLocation();
    if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return <Navigate to="/auth/login" replace />
    }

    if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return <Navigate to="/dashboard" replace />
    }

    return (
        <div>
            {children}
        </div>
    );

}

export default CheckAuth;
