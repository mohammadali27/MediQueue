import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center container mx-auto p-5 bg-gradient-to-b from-blue-500 to-white ">
      <div className="">
        <h1 className=" font-bold text-4xl">MediQueue</h1>
      </div>
      <div className="">
        <ul className="flex gap-5 text-2xl">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/hh"}>Tutors</Link>
          </li>
          <li>
            <Link href={"/"}>Add Tutor</Link>
          </li>
          <li>
            <Link href={"/"}>My Tutors</Link>
          </li>
          <li>
            <Link href={"/"}>My Booked Sessions</Link>{" "}
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default Navbar;
