import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PhoneDetails from './PhoneDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch(`http://localhost:3000/phones`),
  },
  {
    path: "/phones/:id",
    element: <PhoneDetails></PhoneDetails>,
    loader: ({params})=> fetch(`http://localhost:3000/phones/${params.id}`),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
