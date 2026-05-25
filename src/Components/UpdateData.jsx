"use client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";

const UpdateData = ({ data }) => {
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
    availableDays,
    hourlyFee,
    description,
  } = data;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const destnation = Object.fromEntries(formdata.entries());

    const res = await fetch(`http://localhost:8000/datadb/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destnation),
    });
    const result = await res.json();
    if (result) {
      toast.success("Updated successfully!");
    }
  };

  return (
    <>
      <Modal>
        <Button variant="secondary">Update</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-xl">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Envelope className="size-5" />
                </Modal.Icon>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit}>
                    <div className="p-10 space-y-8 max-w-7xl space-x-8 gap-5 text-2xl border-5 border-accent-hover rounded-2xl">
                      <h1 className=" text-center mx-auto font-bold text-2xl">
                        Update
                      </h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                          <TextField defaultValue={tutorName} isRequired>
                            <Label>Tutor Name</Label>
                            <Input
                              name="tutorName"
                              placeholder="Bali Paradise"
                              className="rounded-2xl"
                            />
                            <FieldError />
                          </TextField>
                        </div>

                        {/* Country */}
                        <TextField defaultValue={subject} isRequired>
                          <Label>subject</Label>
                          <Input
                            name="subject"
                            placeholder="Bangla"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>

                        {/* Price */}
                        <TextField
                          defaultValue={hourlyFee}
                          type="number"
                          isRequired
                        >
                          <Label>hourly Fee (USD)</Label>
                          <Input
                            name="hourlyFee"
                            type="number"
                            placeholder="50"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField defaultValue={availableDays} isRequired>
                          <Label> available Days</Label>
                          <Input
                            name="availableDays"
                            placeholder="'Mon', 'Tue', 'Wed', 'Thu', 'Fri'"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                        <TextField defaultValue={availableTimeSlot} isRequired>
                          <Label>available TimeSlot</Label>
                          <Input
                            name="availableTimeSlot"
                            placeholder="4:30 PM - 7:30 PM"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                          <TextField
                            defaultValue={sessionStartDate}
                            type="date"
                            isRequired
                          >
                            <Label>Session Start Date</Label>
                            <Input
                              name="sessionStartDate"
                              type="date"
                              className="rounded-2xl"
                            />
                            <FieldError />
                          </TextField>
                        </div>
                        <div className="md:col-span-2">
                          <TextField
                            defaultValue={email}
                            type="email"
                            isRequired
                          >
                            <Label>Email</Label>
                            <Input
                              name="email"
                              type="email"
                              className="rounded-2xl"
                            />
                            <FieldError />
                          </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                          <TextField defaultValue={tutorPhoto} isRequired>
                            <Label>Image URL</Label>
                            <Input
                              name="tutorPhoto"
                              type="url"
                              placeholder="https://example.com/bali-paradise.jpg"
                              className="rounded-2xl"
                            />
                            <FieldError />
                          </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                          <TextField defaultValue={description} isRequired>
                            <Label>Description</Label>
                            <TextArea
                              name="description"
                              placeholder="Describe the travel experience..."
                              className="rounded-3xl"
                            />
                            <FieldError />
                          </TextField>
                        </div>
                      </div>

                      {/* Buttons */}

                      <div className=" flex gap-5">
                        <Button type="submit">Save</Button>
                        <Button slot="close" variant="secondary">
                          Cancel
                        </Button>
                        <ToastContainer />
                      </div>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default UpdateData;
