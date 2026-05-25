"use client";
import { WithDisabledItems } from "@/app/dropdown/page";
import { WithIcons } from "@/app/modeChang/page";

import ProfilePage from "@/app/profile/page";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  return (
    <div className=" bg-gradient-to-b from-blue-500 to-white fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center mx-auto p-5 ">
        <div className=" flex gap-2 items-center ">
          <WithDisabledItems setIsOpen={setIsOpen} />
          <h1 className=" font-bold text-4xl">MediQueue</h1>
        </div>

        <div
          className={`${isOpen ? "flex" : "hidden"} lg:flex gap-4 items-center mx-auto justify-center font-bold relative`}
        >
          <ul className="flex gap-5 text-2xl">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/tutors"}>Tutors</Link>
            </li>
            {session && (
              <>
                <li>
                  <Link href={"/addTuterePage"}>Add Tutor</Link>
                </li>
                <li>
                  <Link href={"/My-tutor"}>My Tutors</Link>
                </li>
                <li>
                  <Link href={"/my-booking"}>My Booked Sessions</Link>{" "}
                </li>
              </>
            )}
          </ul>
        </div>

        {!session ? (
          <div className="">
            <ul className="flex gap-3">
              <li>
                <Link href={"/login"}>
                  <Button>LogIn</Button>
                </Link>
              </li>
              <li>
                <Link href={"/register"}>
                  <Button>Register</Button>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="">
            <ul className=" flex  items-center gap-3">
              <li>
                <ProfilePage session={session} />
              </li>
              <li>
                <WithIcons />
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="text-right container mx-auto"></div>
    </div>
  );
};

export default Navbar;
