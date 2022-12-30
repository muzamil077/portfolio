import React, { useState } from "react";
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import Button from "../../components/button/button";

function ContactForm() {
  // Declare state variables for the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(name, email, message, "form data");
    setName("");
    setEmail("");
    setMessage("");

    // You can add your own code here to send the form data to a server,
    // display a success message, etc.
  };

  return (
    <>
      <h3 className="text-3xl text-center font-bold mb-6">Contect Us</h3>
      <div className="flex flex-col justify-center items-center">
        <form
          className=" w-96 align-center shadow-lg shadow-indigo-500/50  bg-gray-500 text-white  rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=" Enter your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your your message here..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button> */}
            <div className=" border-sm">
              <Button className="rounded-sm bg-gray-400" size="sm" textColor="" bgColor="bg-blue-500">
                send
              </Button>
            </div>
          </div>
        </form>
        <div className="container mx-auto px-24">
          <h2 className="text-2xl text-gray-500 font-bold ">
            Let's Get Social
          </h2>
          <p className="font-bold text-gray-500 ">
            Follow my online fan page on Facebook and profiles on Twitter,
            GitHub and Linkedin.
          </p>
          <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100085101153232">
          <div className="flex align-center items-center  p-2 w-28 bg-blue-500">
          <span className="text-white"><FaFacebookF/></span>
          <button className="font-bold text-white">Facebook</button>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/muzamil-hussain-90b68421a/">
           <div className="flex align-center items-center  p-2 w-28 bg-green-500"> 
           <span className="text-white"><FaLinkedin/></span>
          <button className="font-bold text-white">LINKEDIN</button>
           </div>
          </a>
          <a href="https://github.com/muzamil077">
           <div className="flex align-center items-center  p-2 w-28 bg-gray-500">
           <span className="text-white"><AiFillGithub/></span>
          <button className="font-bold text-white ">GITHUB</button> 
           </div>
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
