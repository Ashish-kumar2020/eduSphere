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
import UsersHomePage from "./components/UsersHomePage";
import AdminHomePage from "./components/AdminHomePage";
import CreateCourse from "./components/admin/CreateCourse";
import AdminBody from "./components/admin/AdminBody";
import AdminCourses from "./components/admin/AdminCourses";
import AdminProfile from "./components/admin/AdminProfile";

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
    {
      path: "/userHomePage",
      element: <UsersHomePage />,
    },
    {
      path: "/adminHomepage",
      element: <AdminHomePage />,
      children: [
        {
          index: true,
          element: <AdminBody />,
        },
        {
          path: "createcourse",
          element: <CreateCourse />,
        },
        {
          path: "mycourses",
          element: <AdminCourses />,
        },
        {
          path: "profile",
          element: <AdminProfile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
