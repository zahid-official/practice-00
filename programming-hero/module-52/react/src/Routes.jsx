import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dynamic from "./components/Main/Dynamic";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
        {
            path: '/',
            element: <Navigate to='/category/01'></Navigate>
        },
        {
            path: '/category/:id',
            element: <Dynamic></Dynamic>,
            loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
    ]
  },
  {
    path: "/news",
    element: <News></News>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Routes;
