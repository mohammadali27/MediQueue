"use client";
import { AlertDialog, Button } from "@heroui/react";
import Link from "next/link";

const DeleteData = ({ data }) => {
  const { _id } = data;
  const HandelDelete = async () => {
    const res = await fetch(`http://localhost:8000/datadb/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="font-bold text-2xl">{data.tutorName}</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Link href={"/tutors"}>
                <Button onClick={HandelDelete} variant="danger">
                  Delete
                </Button>
              </Link>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteData;
