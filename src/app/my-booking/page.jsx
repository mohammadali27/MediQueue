import { BookingDelete } from "@/Components/BookingDelete";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Booking/${user?.id}`,
  );
  const Bookings = await res.json();
  console.log(Bookings);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className=" text-2xl font-bold mb-5">
        My Bookings:<span>{Bookings.length}</span>
      </h1>
      <div className=" items-center justify-center mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Bookings?.map((Booking) => (
          <div className="mt-5 mb-5 " key={Booking._id}>
            <Card className="">
              <div className=" items-center gap-5 justify-between">
                <div className="flex gap-5  space-y-2 items-center justify-center mx-auto">
                  <Image
                    alt="Booking.image"
                    src={Booking.image}
                    height={150}
                    width={150}
                  />
                  <div className="">
                    <h1>{Booking.name}</h1>
                    <p>{Booking.email}</p>
                    <p>{Booking?.updatedAt}</p>
                    <p className=" items-center text-2xl">
                      price:
                      <span className="font-bold text-xl">
                        ${Booking.hourlyFee}
                      </span>
                    </p>
                    <div className="">
                      <BookingDelete BookingId={Booking._id} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
