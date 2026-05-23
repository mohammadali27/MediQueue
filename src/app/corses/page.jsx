import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CorsesPage = async ({_id}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-datadb`);
  const data = (await res.json()) || [];
  console.log(data);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10 mb-5 container mx-auto gap-5 items-center justify-between">
      {data?.map((d) => (
        <div key={d?._id}>
          <div className=" flex">
            <Card className="w-[500px] gap-2">
              <Image alt="" src={d?.tutorPhoto} width={100} height={100} />
              <Card.Header>
                <Card.Title>{d.tutorName}</Card.Title>
                <span className="text-xs">{d.subject}</span>
                <Card.Description>{d.description}</Card.Description>
              </Card.Header>

              <div className="">
                <Link href={`corsCard/:${_id}`}>
                  <Button className="w-full mx-auto rounded-none">
                    <FaExternalLinkAlt /> Book Session
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      ))}
      <div className="">
        <Link href={"/tutors"}>
          <Button className={""}>All Tutors</Button>
        </Link>
      </div>
    </div>
  );
};

export default CorsesPage;
