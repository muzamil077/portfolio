import Image from "next/image";
import React from "react";
import dev from "../../pages/images/dev.webp";

const HeroSec = () => {
  return (
    <section className=" text-black py-32 px-32">
      <div className="flex justify-center xs:flex-col sm:flex-col md:flex-col lg:flex-row ">
        <div className="container ">
          <h3>______web Designer</h3>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Hello, I Have WEB Development
            <br /> Experence{" "}
          </h1>
          <p className=" mb-8">
            Hi i'm web developer creating visually appealing and user-friendly
            websites <br />for companies and all across the world...
          </p>
          <button className="bg-yellow-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4  ">
            Let,s talk with me
          </button>
        </div>
        {/* <div className=""> */}
          <Image height={600} width={600} alt="DEV" src={dev} />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSec;