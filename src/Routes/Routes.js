import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import TopicDetails from "../Components/TopicDetails/TopicDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <TopicDetails></TopicDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/topic/${params.id}`)
            }
        ]
    }
])

export default router;