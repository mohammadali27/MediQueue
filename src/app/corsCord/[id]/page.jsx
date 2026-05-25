import BookingCard from "@/Components/BookingCard";
import DeleteData from "@/Components/DeleteData";
import UpdateData from "@/Components/UpdateData";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
const IdPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/datadb/${id}`);
  const data = await res.json();
  const {
    _id,
    tutorName,
    tutorPhoto,
    subject,
    availableTimeSlot,
    totalSlot,
    sessionStartDate,
    institution,
    experience,
    location,
    teachingMode,
    bookStatus,
    email,
    hourlyFee,
    description,
  } = data;
  return (
    <div className="max-w-4xl mx-auto p-10  ">
      <Card className="p-5">
        <h1 className="text-4xl font-bold">{data.tutorName}</h1>
        <Image
          className=" w-full h-100 object-cover"
          src={data?.tutorPhoto}
          alt="photo"
          width={300}
          height={300}
        />
        <div className="flex justify-between text-xl font-bold">
          <div className="">
            <h2>Subject: {data.subject}</h2>
            <h2>Available Time Slot: {data.availableTimeSlot}</h2>
            <h2>Total Slot: {data.totalSlot}</h2>
            <h2>Session Start Date: {data.sessionStartDate}</h2>
            <h2>Institution: {data.institution}</h2>
            <h2>Experience: {data.experience}</h2>
            <h2>Location: {data.location}</h2>
            <h2>Teaching Mode: {data.teachingMode}</h2>
            <h2>Book Status: {data.bookStatus}</h2>
            <h3>Email: {data.email}</h3>

            <h3>Description: {data.description}</h3>
          </div>
          <div className="">
            
            <BookingCard data={data} />
          </div>
        </div>
      </Card>
      <div className=" mt-5 flex gap-10">
        <Button variant="secondary">Book Session</Button>
        <UpdateData data={data} />
        <DeleteData data={data} />
      </div>
    </div>
  );
};

export default IdPage;
