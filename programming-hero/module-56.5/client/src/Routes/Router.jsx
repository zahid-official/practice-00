import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import AddCofee from "../components/AddCoffe/AddCofee";
import Update from "../components/Update";
import Error from "../components/Error";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import User from "../components/Auth/User";
import PrivateRoute from "./PrivateRoute";
import UpdateUsers from "../components/UpdateUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffees'),
      },
      {
        path: '/addCoffee',
        element: <AddCofee></AddCofee>
      },
      {
        path: '/user',
        element: <PrivateRoute><User></User></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateUsers/:id',
        element: <PrivateRoute><UpdateUsers></UpdateUsers></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/updateUsers/${params.id}`)
      },
      
    ]
  },
]);

export default router;
