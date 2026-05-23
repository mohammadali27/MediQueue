"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Label, SearchField, Spinner } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const banners = ["/bannarImage1.png", "/bannarImage2.png"];

const Banner = () => {
  const { data: session, isPending } = authClient.useSession();

  const [bannerimage, setBannerimage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerimage((change) => (change + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  if (isPending) {
    return (
      <div className="flex items-center justify-center gap-4">
        <Spinner />
        <Spinner />
        <Spinner />
      </div>
    );
  }
  return (
    <div className="text-center font-bold mt-5">
      

      <h1 className="text-5xl">Explore Our Premium Courses</h1>
      <div className="text-center mx-auto w-100 mt-10  mb-5">
        <SearchField name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[30] p-5" placeholder="Search..." />
            <SearchField.ClearButton />
            <Button>Search</Button>
          </SearchField.Group>
        </SearchField>
      </div>
      <div className=" flex items-center justify-center mx-auto text-center">
        <Image
          className="mx-w-9xl"
          alt="banner"
          src={banners[bannerimage]}
          height={900}
          width={1200}
        />
      </div>
    </div>
  );
};

export default Banner;
