"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(session);
  const [value, setValue] = useState(null);
  const { hourlyFee, _id } = data;
  // console.log(new Date(value));
  const HandelBookIng = async () => {
    const bookingData = {
      userId: user?.id,
      name: user?.name,
      image: user?.image,
      email: user?.email,
      updatedAt: value?.toDate(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      ),
      hourlyFee,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const addData = await res.json();

    toast.success("Booking complete");
  };
  return (
    <Card className=" rounded-none border mt-5 p-20 hover:zoom-105 hover:bg-sky-300">
      <p className="text-sm text-muted">Starting From</p>
      <h3 className="text-2xl font-bold"> ${data.hourlyFee}</h3>
      <DateField onChange={setValue} className="w-[256px]" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={HandelBookIng} className={"w-full"}>
        Booked Now
      </Button>
    </Card>
  );
};

export default BookingCard;
