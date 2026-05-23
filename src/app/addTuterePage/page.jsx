"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
  Button,
  Card,
} from "@heroui/react";

import { redirect } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const AddDestilesPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);

    const destnation = Object.fromEntries(formdata.entries());
    console.log(destnation);
    const res = await fetch("http://localhost:8000/datadb", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destnation),
    });
    const data = await res.json();
    if (data) {
      toast.success("Add All");
    }
  };
  return (
    <div className="p-5 flex justify-center  items-center ">
      <ToastContainer />

      <Card>
        <form
          onSubmit={onSubmit}
          className="p-10 space-y-8 w-3xl space-x-8 gap-5 text-2xl   border-5 border-accent-hover rounded-2xl"
        >
          <h1 className=" text-center mx-auto font-bold text-2xl">
            Add Tutors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Tutor Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="subject" isRequired>
              <Label>subject</Label>
              <Input placeholder="Bangla" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>hourly Fee (USD)</Label>
              <Input type="number" placeholder="50" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label> available Days</Label>
              <Input
                placeholder="'Mon', 'Tue', 'Wed', 'Thu', 'Fri'"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
            <TextField name="duration" isRequired>
              <Label>available TimeSlot</Label>
              <Input placeholder="4:30 PM - 7:30 PM" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Session Start Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <div className="">
            <Button
              type="submit"
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add Tutors
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddDestilesPage;
