import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ListUsers from "./pages/ListUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/lista-de-usuarios',
        element: <ListUsers />
    }
]);

export default router;