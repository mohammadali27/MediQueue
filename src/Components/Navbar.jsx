"use client";
import { WithDisabledItems } from "@/app/dropdown/page";

import ProfilePage from "@/app/profile/page";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  console.log(session);
  return (
    <div className=" bg-gradient-to-b from-blue-500 to-white ">
      <div className="flex justify-between items-center mx-auto p-5 ">
        <div className=" flex gap-2 items-center">
          <WithDisabledItems />
          <h1 className=" font-bold text-4xl">MediQueue</h1>
        </div>

        <div className="">
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
                  <Link href={"/"}>My Tutors</Link>
                </li>
                <li>
                  <Link href={"/"}>My Booked Sessions</Link>{" "}
                </li>
              </>
            )}
          </ul>
        </div>

        {!session ? (
          <div className="">
            <ul className="flex gap-3">
              <Link href={"/login"}>
                <li>
                  <Button>LogIn</Button>
                </li>
              </Link>
              <Link href={"/register"}>
                <li>
                  <Button>Register</Button>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <div className="">
            <ul>
              <Link href={"/"}>
                <li>
                  <ProfilePage />
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className="text-right container mx-auto"></div>
    </div>
  );
};

export default Navbar;
