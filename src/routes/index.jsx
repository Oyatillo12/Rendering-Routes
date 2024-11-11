import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Login from '../pages/Login';
import { useAxios } from '../hooks/useAxios';
import { AuthContext } from '../context/AuthContext';
import useRenderingRoutes from '../hooks/useRenderingRoutes';





function CustomRoutes() {
    const { isAuthenticated } = useContext(AuthContext);
    const [routesData, setRoutesData] = useState([]);
    useEffect(() => {setRoutesData
        async function fetchRoutes() {
            try {
                const res = await useAxios().get('/routes');
                setRoutesData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchRoutes();
    }, []);
    const routes = useRenderingRoutes(routesData, isAuthenticated);

    return (
        <Routes>
            {routes}
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default CustomRoutes;