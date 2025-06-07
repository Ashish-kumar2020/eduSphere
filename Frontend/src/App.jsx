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
import About from "./components/About";
import MainLayout from "./components/MainLayout";
import { Home } from "lucide-react";
import UserSignIn from "./components/UserSignin";
import AdminSignIn from "./components/AdminSignIn";
import ForInstructors from "./components/ForInstructor";
import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/forInstructor",
          element: <ForInstructors />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/courses",
          element: <FeaturedCourses />,
        },
      ],
    },
    {
      path: "/usersignup",
      element: <UserSignUp />,
    },
    {
      path: "/adminSignup",
      element: <AdminSignUp />,
    },
    {
      path: "/signin",
      element: <UserSignIn />,
    },
    {
      path: "/adminsignin",
      element: <AdminSignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
