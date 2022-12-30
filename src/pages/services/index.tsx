import React from "react";
import {CgWebsite} from "react-icons/cg"
import Link from "next/link";
import Button from "../../components/button/button";

export const products = [
  {
    name: "Web Portals",
    Sname:"Web Portal Development Services | NorthAims Technologies",
    discription:
      "Since 2010, NorthAims Tech has created web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.",
    Reguest: "SEND YOUR REQUEST",
    slug: "how-to-learn-code",
    icon:<CgWebsite/>,
  },
  {
    name: "Websites",
    Sname:"Web Development Services | NorthAims Technologies",
    discription:
      "P250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.",
    Reguest: "SEND YOUR REQUEST",
    slug: "how",
  },
  {
    name: "Ecommerce",
    Sname:"Ecommerce Development Services | NorthAims Technologies",
    discription:
      "We create ecommerce solutions for B2C, B2B and marketplace business models. We can smoothly integrate an ecommerce component into your operating web app or launch a new ecommerce presence.",
    Reguest: "SEND YOUR REQUEST",
    slug: "how-to-learn",
  },
  {
    name: "Web Apps",
    Sname:"Web Application Services | NorthAims Technologies",
    discription:
      "We build web apps for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate systems together for coherent operation.",
  },
  {
    name: "Bussiness Analysis",
    Sname:"Full-Scale web  Development by  NorthAims Technologies",

    discription:
      "Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.",
    slug: "learn-code",
  },
  {
    name: "Front-end design and development",
    Sname:"Full-Scale web  Development by  NorthAims Technologies",
    discription:
    "We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks.",
    slug: "code",
  },
];

function Services() {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <span>What I Do</span>
        <h2 className="text-3xl border-b-2   font-semibold mb-6">
          <span className="border-b-2 border-red-400 ">My</span> Services
        </h2>
        <div className="grid grid-cols-3  w-4/3 gap-4">
          {products.map((product) => (
            <div className="bg-white hover:bg-yellow-500   ease-in-out duration-1000 delay-10 cursor-pointer rounded-lg shadow-lg" key={product.name}>
              <div className="p-6">
                <i className="text-6xl ">{product.icon}</i>
                <h3 className="text-xl text-center font-bold mb-2">
                  {product.name}
                </h3>
                <p className="  mb-4">{product.discription}</p>
                <Link href={`/services/${product.slug}`}>
                  <Button
                    className="flex items-center align-center"
                    size="md"
                    textColor="red"
                      bgColor="bg-blue-500"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
