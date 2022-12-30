import { useRouter } from "next/router";
import React from "react";
import { products } from ".";


function servicesinfo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  let data = products.find((x: any) => x.slug === slug);

  if(!data){
    return <h1 className="py-32">error</h1>
  }
  console.log(data);
  return (
    <div className="bg-red-100 py-32">
      <h1 className="font-bold text-4xl px-16">{data?.Sname}</h1>
    </div>
  );
}

export default servicesinfo;
