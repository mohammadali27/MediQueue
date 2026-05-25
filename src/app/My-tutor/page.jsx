"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyTutor = () => {
  const { data: session } = authClient.useSession();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const email = session?.user?.email;

    if (!email) return;

    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/datadb?email=${email}`);

      const mydata = await res.json();
      setTutors(mydata || []);
    };

    fetchData();
  }, [session]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10 mb-5 container mx-auto gap-5 items-center justify-between">
      {tutors?.map((d) => (
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
                <Link href={`/corsCord/${d?._id}`}>
                  <Button className="w-full mx-auto rounded-none">
                    <FaExternalLinkAlt /> Book Session
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTutor;
