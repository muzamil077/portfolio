import React from "react";
import Button from "../../components/button/button";
import pic1 from "../../pages/images/com.webp";
import pic2 from "../../pages/images/happy.webp";
import pic3 from "../../pages/images/design.webp";
import Image from "next/image";

const products = [
  {
    name: "Communications",
    image1: pic1,
    discription:"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
    price: "$20.00",
  },
  {
    name: "Inspired Design",
    image1: pic2,
    discription:"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
    price: "$25.00",
  },
  {
    name: "Happy Customers",
    image1: pic3,
    discription:"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
    price: "$30.00",
  },
];

function Products() {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center font-semibold mb-6">
          Our Features and Services
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div className="bg-white rounded-lg shadow-lg" key={product.name}>
              <div className="p-6">
                <Image height={300} width={300} src={product.image1} alt={"pictures"} />
                <h3 className="text-xl text-center font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-center mb-4">
                  {product.discription}
                </p>
                <Button className=" flex items-center align-center" size="md" textColor="red" bgColor="bg-blue-500">Learn more</Button>
                <p className="text-blue-500 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
