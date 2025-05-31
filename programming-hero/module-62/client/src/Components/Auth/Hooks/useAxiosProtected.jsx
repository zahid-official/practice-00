import axios from "axios";
import { useContext, useEffect } from "react";
import ContextAPI from "../ContextAPI";
import { useNavigate } from "react-router-dom";

// axios instance
const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosProtected = () => {
  // useContext
  const { logout } = useContext(ContextAPI) || {};
  // useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error", error);
        if (error.response.status === 401 || error.response.status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error.message));
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return instance;
};

export default useAxiosProtected;
