import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Instructors from "../components/Instructors";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Testimonials />
      <Instructors />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
