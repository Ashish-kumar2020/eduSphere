import "./App.css";

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
import AdminCurrentCoursePage from "./components/admin/AdminCurrentCoursePage";
import AdminEditCoursePage from "./components/admin/AdminEditCoursePage";
import UserBody from "./components/user/UserBody";
import UserProfile from "./components/user/UserProfile";
import UserPurchasedCourses from "./components/user/UserPurchasedCourses";

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
      children: [
        {
          index: true,
          element: <UserBody/>
        },
          {
            path: "allCourses",
            element: <FeaturedCourses />,
          },
          {
            path: "userProfile",
            element: <UserProfile/>
          },
          {
            path: "userpurchasedcourses",
            element: <UserPurchasedCourses/>
          }
        
      ]
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
        {
          path: "adminCourses",
          element: <AdminCourses />,
        },
        {
          path: "currentCourse",
          element: <AdminCurrentCoursePage/>
        },{
          path: "editCurrentCourse",
          element: <AdminEditCoursePage/>
        }
      ],
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App;
