import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" items-center justify-center mx-auto h-50 w-full bg-red-500">
      <h1 className="text-center font-bold">page not found 404</h1>
      <div className="items-center justify-center flex">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
