import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
