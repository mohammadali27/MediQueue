import { Label, SearchField } from "@heroui/react";
import React from "react";

const Banner = () => {
  return (
    <div className="text-center font-bold mt-5">
      <h1 className="text-5xl">Explore Our Premium Corses</h1>
      <div className="text-center mx-auto w-100 mt-10">
        <SearchField name="search">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[30]" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
    </div>
  );
};

export default Banner;
