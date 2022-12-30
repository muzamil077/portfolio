import React from "react";

const footerData= [
  {
    title:"Social",
    act1:"Facebook",
    icon2:"Twitter",
    icon3:"Youtube"
  },
  {
    title:"Services",
    act1:"Campare",
    icon2:"Dwonload",
    icon3:"Feedback",
    ser4:"Bug Report"
  },
  {
    title:"Activity",
    act1:"Influencers",
    icon2:"Affiliate",
    icon3:"Co-Branding",
    ser4:"Honer",
    act5:"GiveAway"
  }
]

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 ">
        <div className=" flex justify-around  bg-gray-500">
          {
          footerData.map((item)=>{
            return(
              <>
              <div className="mt-8 leading-10 ">
              <h2 className="text-white font-bold">{item.title}</h2>
              <h3>{item.act1}</h3>
              <h3>{item.icon2}</h3>
              <h3>{item.icon3}</h3>
              <h3>{item.ser4}</h3>
              <h3>{item.act5}</h3>
              </div>
              </>
            )

          })
          }
          <div className="mt-10">
            <h2 className="font-bold text-white">Subscription</h2>
            <input className="p-4 mt-8 bg-gray-300" type="text" placeholder="Subscribe to our Portfolio site"/>
            <button className="bg-orange-500 p-4">Subscribe</button>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;