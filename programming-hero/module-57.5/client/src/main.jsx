import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users.jsx";
import Update from "./Update.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
