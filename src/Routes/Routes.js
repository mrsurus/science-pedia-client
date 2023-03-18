import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import MyComment from "../Components/MyComment/MyComment";
import QuestionAnswer from "../Components/QuestionAnswer/QuestionAnswer";
import Register from "../Components/Register/Register";
import DispalyError from "../Components/Shared/DisplayError/DispalyError";
import TopicDetails from "../Components/TopicDetails/TopicDetails";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DispalyError></DispalyError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <TopicDetails></TopicDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://science-pedia-server.vercel.app/topic/${params.id}`)
            },
            {
                path: '/mycomment',
                element: <PrivateRoute> <MyComment></MyComment></PrivateRoute>
            },
            {
                path: '/quesans',
                element: <PrivateRoute><QuestionAnswer></QuestionAnswer></PrivateRoute>
            },
        ]
    }
])

export default router;