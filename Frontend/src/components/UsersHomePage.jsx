import React from "react";
import UserHeader from "./user/UserHeader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const UsersHomePage = () => {
  return <div>
    <UserHeader/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default UsersHomePage;
