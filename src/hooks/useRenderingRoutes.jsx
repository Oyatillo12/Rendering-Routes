import { Route } from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
import { routeComponents } from "./useRouteEl";

function useRenderingRoutes(routes, isAuthenticated) {
    return routes.map((route) => {
        const isPrivate = route.type === 'private';
        if (route.childrenElement && route.childrenElement.length > 0) {
            return (
                <Route key={route.path} path={route.path} element={
                    <ProtectRoute
                        element={routeComponents[route.element]}
                        isPrivate={isPrivate}
                        isAuthenticated={isAuthenticated}
                    />
                }>
                    {useRenderingRoutes(route.childrenElement, isAuthenticated)}
                </Route>
            );
        }
        return (
            <Route key={route.path} path={route.path} element={
            <ProtectRoute
                element={routeComponents[route.element]}
                isPrivate={isPrivate}
                isAuthenticated={isAuthenticated}
            />} />
        );
    });
}

export default useRenderingRoutes;