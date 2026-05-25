"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaDeleteLeft } from "react-icons/fa6";

export function BookingDelete({ BookingId }) {
  const HandelDeleteBooking = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/Booking/${BookingId}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const data = await res.json();
    window.location.reload();
  };

  return (
    <AlertDialog>
      <Button className="w-full" variant="danger">
        Delete <FaDeleteLeft />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={HandelDeleteBooking}
                className="w-full "
                variant="danger-soft"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
