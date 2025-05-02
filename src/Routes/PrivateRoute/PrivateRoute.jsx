import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useAuth()
        const location = useLocation()
        
        if (user) {
            return (
                <div>
                    {children}
                </div>
            );
        }
        if (loader) {
            return <span className="loading loading-bars loading-lg text-[#1abc9c] text-center h-[500px] flex items-center mx-auto"></span>
        }
        
        return <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
};

export default PrivateRoute;