import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";
import Tutorials from "../Pages/Tutorials";
import About from "../Pages/About";
import MainLayout from "../Layout/MainLayout";
import Lesson from "../Components/Learn/Lesson";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Components/Profile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Components/Auth/ForgetPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/learn",
        element: <Learn></Learn>,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/learn/lesson/:id",
        element: (
          <PrivateRoutes>
            <Lesson></Lesson>
          </PrivateRoutes>
        ),
        loader: () => fetch("/words.json"),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRoutes>
            <Tutorials></Tutorials>
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/forget",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default Router;
