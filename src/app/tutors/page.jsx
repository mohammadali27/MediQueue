
import React from "react";
import CorsCardPage from "../corsCord/page";

const CorsesPage = async () => {
  const res = await fetch("http://localhost:8000/datadb");
  const data = (await res.json()) || [];
  console.log(data);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10 mb-5 container mx-auto gap-5 items-center justify-between">
      {data?.map((d) => (
       <CorsCardPage key={d?._id} d={d}/>
      ))}
    </div>
  );
};

export default CorsesPage;
