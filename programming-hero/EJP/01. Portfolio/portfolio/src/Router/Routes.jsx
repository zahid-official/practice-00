import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Project1 from "../Pages/Projects/Project1";
import Project2 from "../Pages/Projects/Project2";
import Project3 from "../Pages/Projects/Project3";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/project1",
          element: <Project1></Project1>
        },
        {
          path: "/project2",
          element: <Project2></Project2>
        },
        {
          path: "/project3",
          element: <Project3></Project3>
        },
      ]
    },
  ]);

export default Routes;