// src/pages/AdminHomePage.jsx
import React from "react";
import AdminBody from "./admin/AdminBody";
import AdminHeader from "./admin/AdminHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const AdminHomePage = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminHomePage;
