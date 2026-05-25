"use client";

import { Bars,} from "@gravity-ui/icons";
import {
  Button,
 
  Dropdown,
  
} from "@heroui/react";
import Link from "next/link";

export function WithDisabledItems({setIsOpen}) {
  return (
    <Dropdown>
      <Button onClick={setIsOpen} isIconOnly aria-label="Menu">
        <Bars className="outline-none" />
      </Button>
      <Dropdown.Popover className="min-w-[220px]">
        <Dropdown.Menu
          disabledKeys={["delete-file"]}
          onAction={(key) => console.log(`Selected: ${key}`)}
        >
          <Dropdown.Item id="home">
            <Link href="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item id="Tutors">
            <Link href="/tutors">Tutors</Link>
          </Dropdown.Item>
          <Dropdown.Item id="Add Tutor">
            <Link href="/add-tutor">Add Tutor</Link>
          </Dropdown.Item>
          <Dropdown.Item id="My Tutors">
            <Link href="/my-tutors">My Tutors</Link>
          </Dropdown.Item>

          <Dropdown.Item id="My Booked Sessions">
            <Link href="/my-booked-sessions">My Booked Sessions</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
