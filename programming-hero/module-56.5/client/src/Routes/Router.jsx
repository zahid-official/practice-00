import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import AddCofee from "../components/AddCoffe/AddCofee";
import Update from "../components/Update";
import Error from "../components/Error";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

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
      
    ]
  },
]);

export default router;
