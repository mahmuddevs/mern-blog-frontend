import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Home from "./pages/Home";
import Blogs from "./pages/Blog/Blogs";
import CreateBlog from "./pages/Blog/CreateBlog";
import EditBLog from "./pages/Blog/EditBLog";
import DeleteBLog from "./pages/Blog/DeleteBLog";
import SingleBlog from "./pages/Blog/SingleBlog";
import Gallery from "./pages/Gallery/Gallery";
import CreateGallary from "./pages/Gallery/CreateGallary";

const router = createBrowserRouter([
    {
        element:<App />,
        children:[
            {
                path:'/gallery/create',
                element: <CreateGallary />
            },
            {
                path:'/gallery',
                element: <Gallery />
            },
            {
                path:'/blogs',
                element: <Blogs />
            },
            {
                path:'/create-blog',
                element: <CreateBlog />
            },
            {
                path:'/show-blog/:id',
                element: <SingleBlog />
            },
            {
                path:'/edit-blog/:id',
                element: <EditBLog />
            },
            {
                path:'/delete-blog/:id',
                element: <DeleteBLog />
            },
            {
                path:'/',
                element: <Home />
            }

        ]
    }
])

export default router