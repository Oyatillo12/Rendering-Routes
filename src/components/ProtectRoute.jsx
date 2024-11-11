import { Navigate} from "react-router-dom";

function ProtectRoute({ element, isPrivate, isAuthenticated }) {
    if (isPrivate && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return element;
}

export default ProtectRoute;