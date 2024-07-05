import { createBrowserRouter } from "react-router-dom";
import Global from "../layouts/Global";
import Home from "../pages/Home"
import Blogs from "../pages/Blog/Blogs"
import CreateBlog from "../pages/Blog/CreateBlog"
import SingleBlog from "../pages/Blog/SingleBlog"
import EditBLog from "../pages/Blog/EditBLog"
import DeleteBLog from "../pages/Blog/DeleteBLog"
import Login from "../pages/Global/Login"
import Register from "../pages/Global/Register"
import CheckLogin from "../routes/route-protectors/CheckLogin"
import Admin from "../layouts/Admin";
import Dashboard from "../pages/Admin/Dashboard";
import AdminRoutes from "./route-protectors/AdminRoutes";


const router = createBrowserRouter([
    {
        element: <Global />,
        children: [
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/create-blog',
                element: <CreateBlog />
            },
            {
                path: '/show-blog/:id',
                element: <SingleBlog />
            },
            {
                path: '/edit-blog/:id',
                element: <EditBLog />
            },
            {
                path: '/delete-blog/:id',
                element: <DeleteBLog />
            },
            {
                path: '/login',
                element: <CheckLogin><Login /></CheckLogin>
            },
            {
                path: '/register',
                element: <CheckLogin><Register /></CheckLogin>
            },
            {
                path: '/',
                element: <Home />
            }

        ]
    },
    {
        element: <Admin />,
        children: [
            {
                path: '/admin/dashboard',
                element: <AdminRoutes><Dashboard /></AdminRoutes>
            }
        ]
    }
])

export default router