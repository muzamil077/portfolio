import React, { Children } from "react";
import HeroSec from "./home/home";
import About from "./about/about";
import Products from "./products/products";
import BlogSection from "./blog/blog";
import Button from "../components/button/button";
import ContactForm from "./contectForm/contectForm";
const Home = () => {
  return (
    <div>
      <HeroSec/>
      <About/>
      <Products/>
      <BlogSection/>
      <ContactForm/>
      
    </div>
  );
};
export default Home;
