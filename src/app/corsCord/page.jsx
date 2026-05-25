import { Avatar, Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const CorsCardPage = ({ d }) => {
  return (
    <div key={d?._id}>
      <div className=" flex">
        <Card className="w-[500px] gap-2">
          <Image
            alt="tutorPhoto"
            src={d?.tutorPhoto}
            width={100}
            height={100}
          />
          <Card.Header>
            <Card.Title>{d.tutorName}</Card.Title>
            <Card.Description>{d.description}</Card.Description>
          </Card.Header>
          <Card.Footer className="flex gap-2">
            <span className="text-xs">{d.subject}</span>
          </Card.Footer>
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
  );
};

export default CorsCardPage;
