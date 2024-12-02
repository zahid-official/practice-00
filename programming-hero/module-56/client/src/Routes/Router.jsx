import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import AddCofee from "../components/AddCoffe/AddCofee";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
      
    ]
  },
]);

export default router;
