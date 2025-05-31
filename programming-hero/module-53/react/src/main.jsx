import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Components/Auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
