import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signin from "./components/UserSignin";
import Signup from "./components/UserSignup";
import HomePage from "./pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import UserSignUp from "./components/UserSignup";
import AdminSignUp from "./components/AdminSignup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/usersignup",
      element: <UserSignUp />,
    },
    {
      path: "/adminSignup",
      element: <AdminSignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
