import React, { Children } from "react";
import HeroSec from "./home/home";
import About from "./about/about";
import Products from "./services";
import BlogSection from "./blog/blog";
import Button from "../components/button/button";
import ContactForm from "./contectForm/contectForm";
import Testimonials from "./testimonials";
const Home = () => {
  return (
    <div>
      <HeroSec/>
      <About/>
      <Products/>
      <Testimonials/>
      <BlogSection/>
      <ContactForm/>

    </div>
  );
};
export default Home;
