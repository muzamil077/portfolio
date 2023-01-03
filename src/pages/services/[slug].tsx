import { useRouter } from "next/router";
import React from "react";
import { products } from ".";
import Button from "../../components/button/button";

function servicesinfo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  let data = products.find((x: any) => x.slug === slug);

  if (!data) {
    return <h1 className="py-32">error</h1>;
  }
  console.log(data);
  return (
    <div className="bg-gray-500 px-16 py-32">
      <h1 className="font-bold text-2xl w-4/2 border-b-2  border-yellow-500">
        {data?.Sname}
      </h1>
     
      <div className="mt-4">
      <h2>Fill in the form below, and our rep will get back in 30 minutes to schedule <br/> a kickoff discussion. </h2>
          <textarea
            id="about"
            name="about"
            rows="3"
            className="mt-1 block w-96 h-24 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="How can we help you..."
          ></textarea>
        </div>
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="company-website"
          className="block mt-2 text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="mt-1 shadow-sm">
          <input
            type="text"
            name="company-website"
            id="company-website"
            className=" w-96 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Inter your name"
          ></input>
        </div>
      </div>   <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="company-website"
          className="block mt-2 text-sm font-medium text-gray-700"
        >
         Work Email
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="block w-96 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Inter Email"
          ></input>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <label
          htmlFor="company-website"
          className="block mt-2 text-sm font-medium text-gray-700"
        >
          Comapany
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="company-website"
            id="company-website"
            className="block w-96 p-2 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Inter your Campany"
          ></input>
        </div>
      </div>
      <Button className="float-left bg-yellow-500" text-red-500 size="md" bgColor="bg-yellow">Submit</Button>
    </div>
  );
}

export default servicesinfo;
